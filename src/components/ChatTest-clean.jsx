import { useState, useEffect, useRef } from "react";
import { useAccount, useConnect, useDisconnect, useWriteContract, useReadContract, useWaitForTransactionReceipt, useSendTransaction } from "wagmi";
import { parseEther, formatEther } from "viem";
import Section from "./Section";
import { CONTRACT_CONFIG, getTransactionUrl, getAddressUrl, isValidEthereumAddress, formatAddress } from "../config/contract";

const ChatTest = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { sendTransaction, data: hash, isPending, reset: resetTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "Hello! I'm Sonic, your AI assistant for ETH transactions. Connect your wallet to get started." 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState([
    { name: "Omar", address: "0xB5eFE57D5CcD5c64cD081dcce2F0507E31cd13AD" },
    { name: "Yamil", address: "0xF507Baf56754091Fc700d3cac895F005AF446fF4" }
  ]);
  const [newContactName, setNewContactName] = useState("");
  const [newContactAddress, setNewContactAddress] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [pendingTransaction, setPendingTransaction] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  // Get user transactions
  const { data: userTransactionIds } = useReadContract({
    address: CONTRACT_CONFIG.address,
    abi: CONTRACT_CONFIG.abi,
    functionName: "getUserTransactions",
    args: address ? [address] : undefined,
    enabled: isConnected && !!address,
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isConfirmed && pendingTransaction && hash) {
      const transactionUrl = getTransactionUrl(hash);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `✅ **SepoliaETH sent successfully!**

💰 **Details:**
• Amount: ${pendingTransaction.amount} ETH
• Recipient: ${pendingTransaction.displayName}
• Hash: ${hash}
• Network: Sepolia Testnet

🔗 **View on Etherscan:** ${transactionUrl}

Transaction completed! 🎉` 
      }]);
      
      // Add to local history
      setTransactionHistory(prev => [
        {
          id: Date.now(),
          type: "Send",
          amount: pendingTransaction.amount,
          to: pendingTransaction.displayName,
          status: "Completed",
          timestamp: new Date().toLocaleString(),
          hash: hash
        },
        ...prev
      ]);
      
      // Clear transaction state completely to allow new transactions 
      setPendingTransaction(null);
      // Reset the transaction hook to enable new transactions
      setTimeout(() => {
        resetTransaction();
      }, 1000);
    }
  }, [isConfirmed, hash, pendingTransaction, resetTransaction]);

  const parseTransactionCommand = (message) => {
    // More flexible patterns to detect send commands
    const patterns = [
      /(?:send|enviar|transfer)\s+([\d.]+)\s+(?:eth|sepolia\s*eth)\s+(?:to|a)\s+(0x[a-fA-F0-9]{40})/i,
      /(?:send|enviar|transfer)\s+([\d.]+)\s+(?:eth|sepolia\s*eth)\s+(?:to|a)\s+(\w+)/i,
      /(?:send|enviar)\s+([\d.]+)\s+(?:to|a)\s+(0x[a-fA-F0-9]{40})/i,
      /(?:send|enviar)\s+([\d.]+)\s+(?:to|a)\s+(\w+)/i
    ];

    for (const pattern of patterns) {
      const match = message.match(pattern);
      if (match) {
        const amount = match[1];
        const recipientOrName = match[2];
        
        // If it's a valid address
        if (isValidEthereumAddress(recipientOrName)) {
          return { type: "send", amount, recipient: recipientOrName };
        }
        
        // If it's a contact name
        const contact = contacts.find(c => c.name.toLowerCase() === recipientOrName.toLowerCase());
        if (contact) {
          return { type: "send", amount, recipient: contact.address, contactName: recipientOrName };
        }
      }
    }

    return null;
  };

  const getFallbackResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Predefined responses for common queries
    if (lowerMessage.includes('ethereum') || lowerMessage.includes('eth')) {
      return "🔗 **Ethereum** is a decentralized blockchain that enables smart contracts and decentralized applications (dApps). ETH is its native cryptocurrency used to pay for transactions and computation on the network.\n\n💡 Would you like to send ETH? Use: `Send 0.001 ETH to [address]`";
    }
    
    if (lowerMessage.includes('smart contract') || lowerMessage.includes('contract')) {
      return "📜 **Smart Contracts** are programs that execute automatically on the blockchain when certain conditions are met. Our bot uses the TransactionManager contract on Sepolia to manage transactions securely.\n\n🔍 Contract address: `" + CONTRACT_CONFIG.address + "`";
    }
    
    if (lowerMessage.includes('balance') || lowerMessage.includes('saldo')) {
      return `💰 To view your current balance, check your wallet ${isConnected ? `(${formatAddress(address)})` : '(not connected)'} on Sepolia Testnet.\n\n🔗 You can use: https://sepolia.etherscan.io/address/${address || 'your-address'}\n\n💡 To get test ETH: https://sepoliafaucet.com/`;
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('ayuda') || lowerMessage.includes('command')) {
      return `🤖 **Available commands:**\n\n📤 **To send SepoliaETH:**\n• \`Send 0.001 ETH to 0x...\`\n• \`Send 0.5 ETH to Omar\`\n• \`Transfer 0.1 SepoliaETH to 0x...\`\n\n❓ **Queries:**\n• "What is Ethereum?"\n• "What's my balance?"\n• "Explain smart contracts"\n\n💡 I use natural language - just tell me what you want to do!`;
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hola')) {
      return `Hello! 👋 I'm Sonic Transaction Bot, your assistant for ETH transactions.\n\n${isConnected ? `✅ Wallet connected: ${formatAddress(address)}` : '❌ Please connect your wallet first'}\n\n💡 Try commands like: \`Send 0.001 ETH to Omar\``;
    }
    
    return null;
  };

  const callDeepseekAPI = async (message) => {
    try {
      console.log("🤖 Calling Deepseek API...");
      console.log("User message:", message);
      console.log("API Key present:", !!import.meta.env.VITE_DEEPSEEK_API_KEY);

      // Specific context for the bot
      const systemContext = `You are Sonic Transaction Bot, an AI assistant specialized in Ethereum transactions.

CONTEXT:
- You work with the TransactionManager contract on Sepolia Testnet
- Contract address: ${CONTRACT_CONFIG.address}
- User is ${isConnected ? 'connected' : 'disconnected'} ${isConnected ? `with wallet: ${formatAddress(address)}` : ''}

AVAILABLE COMMANDS:
- "Send [amount] ETH to [address/name]"  
- Queries about Ethereum, smart contracts, transactions
- Information about balance, history, etc.

PERSONALITY:
- Friendly and professional
- Explain technical concepts simply
- Always emphasize security
- Use appropriate emojis

If you don't understand something, ask for clarification. If it's a transaction command, simply say you'll process it.`;

      // Direct API URL
      const url = 'https://api.deepseek.com/v1/chat/completions';

      console.log(`Testing URL: ${url}`);
      
      const requestBody = {
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: systemContext
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 200,
        temperature: 0.7,
        stream: false
      };

      console.log("Request body:", JSON.stringify(requestBody, null, 2));

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify(requestBody)
      });

      console.log(`Response from ${url}:`, response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error ${response.status}:`, errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("✅ Successful response from Deepseek:", data);
      
      return data.choices[0].message.content;

    } catch (error) {
      console.error('❌ Final error calling Deepseek API:', error);
      
      // Fallback responses for common queries
      const fallbackResponses = getFallbackResponse(message);
      if (fallbackResponses) {
        return fallbackResponses;
      }
      
      return `🔧 Sorry, I'm having connectivity issues with my AI system (${error.message}). However, I can help you with transactions using commands like 'Send 0.001 ETH to [address]'. Would you like to try a transaction?`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    if (!isConnected) {
      setMessages(prev => [...prev, 
        { role: "user", content: inputValue },
        { role: "assistant", content: "❌ Please connect your wallet first to process transactions." }
      ]);
      setInputValue("");
      return;
    }

    const userMessage = inputValue;
    setInputValue("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    // Check if it's a transaction command
    const transactionCommand = parseTransactionCommand(userMessage);
    
    if (transactionCommand) {
      try {
        const { amount, recipient, contactName } = transactionCommand;
        
        // Validate address
        if (!isValidEthereumAddress(recipient)) {
          setMessages(prev => [...prev, { 
            role: "assistant", 
            content: "❌ Invalid Ethereum address. Make sure it has 42 characters and starts with '0x'." 
          }]);
          return;
        }

        // Validate amount
        if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
          setMessages(prev => [...prev, { 
            role: "assistant", 
            content: "❌ Invalid amount. Must be a positive number." 
          }]);
          return;
        }

        const displayName = contactName || formatAddress(recipient);
        
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: `💼 Preparing transaction:\n• Send: ${amount} ETH\n• Recipient: ${displayName}\n• Address: ${recipient}\n• Network: Sepolia Testnet\n\nDo you want to continue? Click "Confirm Transaction" to proceed.` 
        }]);

        setPendingTransaction({
          amount,
          recipient,
          displayName
        });

      } catch (error) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "❌ Error processing transaction command. Please verify the format." 
        }]);
      }
    } else {
      // Call Deepseek API for general responses
      setIsThinking(true);
      const response = await callDeepseekAPI(userMessage);
      setIsThinking(false);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }
  };

  const executeTransaction = async () => {
    if (!pendingTransaction) return;

    try {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `🚀 Sending ${pendingTransaction.amount} SepoliaETH to ${pendingTransaction.displayName}...` 
      }]);

      // Send ETH directly using sendTransaction
      sendTransaction({
        to: pendingTransaction.recipient,
        value: parseEther(pendingTransaction.amount)
      });

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "⏳ Transaction sent. Waiting for network confirmation..." 
      }]);

    } catch (error) {
      console.error("Error executing transaction:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `❌ Error sending SepoliaETH: ${error.message}. 

🔍 **Possible causes:**
• Insufficient SepoliaETH balance
• Wrong network (must be Sepolia Testnet)
• Insufficient gas
• Invalid address

💡 **Solutions:**
• Get free SepoliaETH at: https://sepoliafaucet.com/
• Verify you're on Sepolia Testnet
• Try with a smaller amount` 
      }]);
      setPendingTransaction(null);
    }
  };

  const cancelTransaction = () => {
    setPendingTransaction(null);
    setMessages(prev => [...prev, { 
      role: "assistant", 
      content: "❌ Transaction cancelled." 
    }]);
  };

  const addContact = () => {
    if (!newContactName.trim() || !newContactAddress.trim()) return;
    
    if (!isValidEthereumAddress(newContactAddress)) {
      alert("Invalid Ethereum address");
      return;
    }

    setContacts(prev => [...prev, { 
      name: newContactName.trim(), 
      address: newContactAddress.trim() 
    }]);
    setNewContactName("");
    setNewContactAddress("");
  };

  const removeContact = (indexToRemove) => {
    setContacts(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const quickSendToContact = (contact) => {
    setInputValue(`Send 0.001 ETH to ${contact.name}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="h1 mb-6">🤖 Sonic Transaction Bot</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Smart assistant for ETH transactions on Sepolia Testnet
          </p>
          
          {/* Connection Status */}
          <div className="flex justify-center mb-8">
            {isConnected ? (
              <div className="flex items-center gap-4 p-4 bg-n-8 border border-n-6 rounded-xl">
                <span className="text-green-400">✅ Wallet connected: {formatAddress(address)}</span>
                <button
                  onClick={() => disconnect()}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 p-6 bg-n-8 border border-n-6 rounded-xl">
                <span className="text-red-400">🔴 Wallet not connected</span>
                {connectors.map((connector) => (
                  <button
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    Connect {connector.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Chat */}
            <div className="lg:col-span-2">
              <div className="bg-n-8 border border-n-6 rounded-3xl p-6 h-[600px] flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                          : 'bg-n-7 text-n-1 border border-n-6'
                      }`}>
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      </div>
                    </div>
                  ))}
                  
                  {isThinking && (
                    <div className="flex justify-start">
                      <div className="bg-n-7 text-n-1 border border-n-6 p-4 rounded-2xl">
                        <div className="flex items-center gap-2">
                          <div className="animate-spin w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"></div>
                          <span className="text-sm text-n-4">Sonic is thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Transaction Status */}
                  {pendingTransaction && (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-yellow-400">⏳ Pending transaction</span>
                          <p className="text-n-3 text-sm mt-1">
                            Send {pendingTransaction.amount} ETH to {pendingTransaction.displayName}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={executeTransaction}
                            disabled={isPending || isConfirming}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                          >
                            {isPending || isConfirming ? "Processing..." : "Confirm"}
                          </button>
                          <button
                            onClick={cancelTransaction}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Commands */}
                {messages.length <= 1 && (
                  <div className="mb-4 p-4 bg-n-7/50 rounded-xl">
                    <p className="text-n-4 text-xs mb-2">💡 Quick commands:</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setInputValue("Send 0.001 ETH to Omar")}
                        className="px-3 py-1 bg-n-7 text-n-2 rounded text-xs hover:bg-n-6 transition-colors"
                      >
                        💸 Send ETH
                      </button>
                      <button
                        onClick={() => setInputValue("How to send SepoliaETH?")}
                        className="px-3 py-1 bg-n-7 text-n-2 rounded text-xs hover:bg-n-6 transition-colors"
                      >
                        ❓ Help
                      </button>
                      <button
                        onClick={() => setInputValue("What's my balance?")}
                        className="px-3 py-1 bg-n-7 text-n-2 rounded text-xs hover:bg-n-6 transition-colors"
                      >
                        💰 Balance
                      </button>
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isConnected ? "Write here... (e.g: Send 0.001 ETH to Omar)" : "Connect your wallet to get started..."}
                    className="flex-1 p-4 bg-n-7 border border-n-6 rounded-2xl text-n-1 placeholder-n-4 focus:outline-none focus:border-purple-400"
                    disabled={!isConnected}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || !isConnected || isThinking}
                    className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contacts */}
              <div className="bg-n-8 border border-n-6 rounded-3xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs">👥</span>
                  Contacts
                </h3>
                
                <div className="space-y-3 mb-4">
                  {contacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-n-7 rounded-xl">
                      <div className="flex-1 min-w-0">
                        <p className="text-n-1 font-medium">{contact.name}</p>
                        <p className="text-n-4 text-xs truncate">{formatAddress(contact.address)}</p>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => quickSendToContact(contact)}
                          className="p-1 text-purple-400 hover:bg-n-6 rounded"
                          title="Quick Send"
                        >
                          💸
                        </button>
                        <button
                          onClick={() => removeContact(index)}
                          className="p-1 text-red-400 hover:bg-n-6 rounded"
                          title="Remove contact"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Contact name"
                    value={newContactName}
                    onChange={(e) => setNewContactName(e.target.value)}
                    className="w-full p-2 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 text-sm focus:outline-none focus:border-purple-400"
                  />
                  <input
                    type="text"
                    placeholder="0x... (address)"
                    value={newContactAddress}
                    onChange={(e) => setNewContactAddress(e.target.value)}
                    className="w-full p-2 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 text-sm focus:outline-none focus:border-purple-400"
                  />
                  <button
                    onClick={addContact}
                    className="w-full p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm transition-colors"
                  >
                    Add Contact
                  </button>
                </div>
              </div>

              {/* Transaction History */}
              <div className="bg-n-8 border border-n-6 rounded-3xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">📜</span>
                  Transaction History
                </h3>
                
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {transactionHistory.map((tx) => (
                    <div key={tx.id} className="p-3 bg-n-7 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-n-1 font-medium">{tx.type}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tx.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {tx.status}
                        </span>
                      </div>
                      <p className="text-n-3 text-sm">{tx.amount} ETH → {tx.to}</p>
                      <p className="text-n-4 text-xs">{tx.timestamp}</p>
                      {tx.hash && (
                        <a
                          href={getTransactionUrl(tx.hash)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 text-xs hover:underline"
                        >
                          View on Etherscan
                        </a>
                      )}
                    </div>
                  ))}
                  
                  {transactionHistory.length === 0 && (
                    <p className="text-n-4 text-sm text-center py-8">No transactions yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChatTest;
