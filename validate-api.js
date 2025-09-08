// Verificar si la API key de Deepseek es válida
const API_KEY = "sk-f984577379764c759173c5762d9c25ec";

async function validateAPIKey() {
    console.log("🔍 Validating Deepseek API Key...");
    console.log("Key:", API_KEY.substring(0, 10) + "...");
    
    const urls = [
        'https://api.deepseek.com/chat/completions',
        'https://api.deepseek.com/v1/chat/completions'
    ];
    
    for (const url of urls) {
        console.log(`\n📡 Testing ${url}`);
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat",
                    messages: [
                        {
                            role: "user",
                            content: "Hello, just testing the API. Please respond with 'API is working'"
                        }
                    ],
                    max_tokens: 50,
                    stream: false
                })
            });
            
            console.log(`Status: ${response.status} ${response.statusText}`);
            
            const responseText = await response.text();
            console.log("Response:", responseText);
            
            if (response.ok) {
                const data = JSON.parse(responseText);
                console.log("✅ SUCCESS! Response content:", data.choices[0].message.content);
                return true;
            } else {
                console.error("❌ FAILED:", responseText);
            }
            
        } catch (error) {
            console.error("❌ ERROR:", error.message);
        }
    }
    
    return false;
}

validateAPIKey();
