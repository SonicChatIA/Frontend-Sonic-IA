# 🤖 AI Chatbot - Easy Transactions on Sonic Network

<div align="center">
  <img src="./src/assets/IA chat/logo.png" alt="AI Chatbot Logo" width="200"/>
  
  [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow.svg)]()
  [![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)]()
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)](https://reactjs.org/)
  [![Sonic Network](https://img.shields.io/badge/Network-Sonic-purple.svg)](https://sonic.network/)
</div>

## 📋 Description

**AI Chatbot** is a revolutionary web3 application that combines conversational artificial intelligence with blockchain transactions on the Sonic network. It allows users to perform cryptocurrency transfers intuitively through natural chat commands, eliminating the technical complexity of traditional transactions.

### 🎯 Key Features

- 🤖 **Conversational AI**: Interact with an intelligent chatbot to perform transactions
- ⚡ **Sonic Network**: Ultra-fast and low-cost transactions
- 🔐 **Web3 Security**: Integration with WalletConnect compatible wallets
- 🎨 **Modern UI/UX**: Elegant interface with smooth animations
- 📱 **Responsive**: Optimized for mobile and desktop devices
- 🌙 **Dark Theme**: Modern design with dark color scheme

## 🚀 Live Demo

🔗 **[View Demo](https://frontend-sonic-ia.vercel.app/)** 

## 🚀 Contract deployed in Sonic
<tr>
  <td>
    <img src="./src/assets/readme sreen/logo sonic-Photoroom.png" width="100px" alt="Yamil Navia"/>
  </td>
  <td>
    ✅<a href="https://sonicscan.org/address/0x9d7b2ea62b7b9b1c382c1b92e8dd567e6e772090" target="_blank"><b>contract verified on sonicscan.org</b></a>
    <br/>
    <br/>
    <p>contract address: 0x9d7b2eA62b7B9B1c382c1B92e8dd567E6e772090<p/>
  </td>
</tr>



## 👥 Development Team

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="./src/assets/integrantes/yamil.jpg" width="100px;" alt="Yamil Navia"/><br />
        <sub><b>Yamil Navia</b></sub><br />
        <sub>Blockchain Developer</sub><br />
        <sub>Solidity - Rust</sub>
      </td>
      <td align="center">
        <img src="./src/assets/integrantes/jhamil.jpg" width="100px;" alt="Jhamil Mamani"/><br />
        <sub><b>Jhamil Mamani</b></sub><br />
        <sub>Frontend Developer</sub><br />
        <sub>React - Tailwind</sub>
      </td>
      <td align="center">
        <img src="./src/assets/integrantes/omar.jpg" width="100px;" alt="Omar Quispe"/><br />
        <sub><b>Omar Quispe</b></sub><br />
        <sub>AI Developer</sub><br />
        <sub>Specialist Agent AI</sub>
      </td>
    </tr>
  </table>
</div>

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - JavaScript library for building user interfaces
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Web3 & Blockchain
- **Wagmi** - React hooks for Ethereum
- **RainbowKit** - Wallet connection library
- **Viem** - TypeScript interface for Ethereum
- **Sonic Network** - High-speed, low-cost blockchain

### Development Tools
- **ESLint** - JavaScript linter
- **PostCSS** - Tool for transforming CSS
- **Autoprefixer** - PostCSS plugin to add browser prefixes

## 📁 Project Structure

```
AI-Chatbot/
├── public/
│   ├── favicon.ico
│   ├── apple-icon.png
│   └── ...
├── src/
│   ├── assets/
│   │   ├── integrantes/
│   │   ├── hero/
│   │   ├── IA chat/
│   │   └── ...
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ChatTest.jsx
│   │   ├── integrationsDEV.jsx
│   │   └── ...
│   ├── config/
│   │   └── index.js
│   ├── constants/
│   │   └── index.js
│   ├── chains/
│   │   └── sonic.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Installation and Setup

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Git**

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/SonicChatIA/Frontend-Sonic-IA.git
   cd Frontend-Sonic-IA
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configurations:
   ```env
   VITE_PROJECT_ID=your_wallet_connect_project_id
   VITE_SONIC_RPC_URL=https://rpc.sonic.network
   VITE_AI_API_KEY=your_ai_api_key
   ```

4. **Run in development**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎮 Application Usage

### 1. Connect Wallet
- Click "Connect Wallet" in the top right corner
- Select your preferred wallet (MetaMask, WalletConnect, etc.)
- Authorize the connection

### 2. Configure Sonic Network
- The application will automatically detect if you need to change networks
- Accept the switch to Sonic network when prompted

### 3. Use AI Chat
- Go to the chatbot section
- Type commands like:
  - "Send 10 SONIC to 0x..."
  - "What's my balance?"
  - "Show transaction history"
  - "Help with transactions"

### 4. Perform Transactions
- The AI will interpret your request
- Confirm transaction details
- Execute the transaction after your approval

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build application for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint to check code
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Upload the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployment

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

## 📝 Roadmap

### Version 1.1
- [ ] Multi-language support
- [ ] Integration with more wallets
- [ ] Advanced AI features

### Version 1.2
- [ ] Real-time market analysis
- [ ] Custom price alerts
- [ ] Portfolio dashboard

### Version 2.0
- [ ] Native mobile application
- [ ] Support for more blockchains
- [ ] Advanced DeFi features

## 📄 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgments

- **Sonic Network** for providing the blockchain infrastructure
- **React Team** for the amazing framework
- **Tailwind CSS** for the styling utilities
- **Framer Motion** for the smooth animations
- **Open Source Community** for the tools and libraries
## :camera: Screenshots

![AI ChatBot App](./src/assets/readme%20sreen/img1.png "AI ChatBot App")

![Generative AI](./src/assets/readme%20sreen/img4.png "Generative AI")

![Modern Animations](./src/assets/readme%20sreen/img3.png "Modern Animations")

![Onboarding Section](./src/assets/readme%20sreen/img5.png "Onboarding Section")

## Operation
![Feature Preview](./src/assets/readme%20sreen/img6.jpeg "Feature Preview")

![Chat Interface](./src/assets/readme%20sreen/img7.jpeg "Chat Interface")

![Transaction Flow](./src/assets/readme%20sreen/img8.jpeg "Transaction Flow")

## :rocket: Sonic Mainnet Deployment

🎉 **Smart Contract Successfully Deployed on Sonic Mainnet!**

### Contract Details:
- **Contract Address**: `0x9d7b2eA62b7B9B1c382c1B92e8dd567E6e772090`
- **Network**: Sonic Mainnet (Chain ID: 146)
- **Explorer**: [View on Sonicscan](https://sonicscan.org/address/0x9d7b2ea62b7b9b1c382c1b92e8dd567e6e772090)
- **Status**: ✅ Verified and Active

### Key Features:
- **Create Transactions**: Register S token transactions on-chain
- **Execute Transactions**: Process pending transactions with smart contract validation
- **Transaction History**: Query user transactions and pending operations
- **Event Logging**: Full transaction history with TransactionCreated and TransactionExecuted events

### Contract Functions:
- `createTransaction(address _recipient, uint256 _amount, string _currency)` - Create a new transaction record
- `executeTransaction(uint256 _transactionId)` - Execute a pending transaction
- `getUserTransactions(address _user)` - Get all transactions for a user
- `getTransaction(uint256 _transactionId)` - Get detailed transaction information
- `getPendingTransactions()` - Get all pending transactions

### Usage Examples:
```javascript
// Send S tokens using natural language
"Send 0.1 S to Omar"
"Transfer 5 S to 0x742d35Cc6634C0532925a3b8D404e2ce5E99DfeF"
"Send 0.001 S to Yamil"

// Query information
"What's my balance?"
"Show my transaction history"
"Explain smart contracts"
```

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Javascript](https://skillicons.dev/icons?i=js "Javascript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Javascript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://Vercel.app/ "Vercel") 
<a href="https://sonic.network/" title="Sonic Network"><img src="./src/assets/readme%20sreen/logo%20sonic-Photoroom.png" alt="Sonic" width="48" height="48"/></a>

## :wrench: Stats

[![Stats for AI Chatbot](/.github/images/stats.svg "Stats for AI Chatbot")](https://pagespeed.web.dev/analysis?url=https://frontend-sonic-ia.vercel.app/ "Stats for AI Chatbot")

## ⭐ Give it a Star

If this project has been useful to you, consider giving it a star! ⭐

---

<div align="center">
  <p>Made with ❤️ by the AI Chatbot team</p>
  <p>© 2025 AI Chatbot. All rights reserved.</p>
</div>
<br />

