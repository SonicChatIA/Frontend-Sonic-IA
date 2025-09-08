// Prueba de la API de Deepseek
const DEEPSEEK_API_KEY = "sk-f984577379764c759173c5762d9c25ec";

async function testDeepseekAPI() {
    console.log("🔄 Probando conexión con Deepseek API...");
    
    try {
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: "Eres un asistente para transacciones de Ethereum. Responde de forma breve y amigable."
                    },
                    {
                        role: "user",
                        content: "Hola, ¿puedes explicarme qué es Ethereum?"
                    }
                ],
                max_tokens: 100,
                temperature: 0.7
            })
        });

        console.log("Status:", response.status);
        console.log("Headers:", response.headers);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ Error Response:", errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Respuesta exitosa:", data);
        console.log("📝 Contenido:", data.choices[0].message.content);
        
    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    }
}

// Ejecutar la prueba
testDeepseekAPI();
