import { useState } from "react";

const DeepseekTest = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testAPI = async (useV1 = false) => {
    setLoading(true);
    setError("");
    setResponse("");

    const baseUrl = useV1 ? 'https://api.deepseek.com/v1/chat/completions' : 'https://api.deepseek.com/chat/completions';

    try {
      console.log("🔄 Iniciando prueba de Deepseek API...");
      console.log("URL:", baseUrl);
      console.log("API Key presente:", !!import.meta.env.VITE_DEEPSEEK_API_KEY);
      console.log("API Key:", import.meta.env.VITE_DEEPSEEK_API_KEY?.substring(0, 10) + "...");

      const requestBody = {
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "Eres un asistente amigable. Responde de forma breve."
          },
          {
            role: "user",
            content: "Hola, ¿puedes explicarme qué es Ethereum en 50 palabras?"
          }
        ],
        max_tokens: 100,
        temperature: 0.7,
        stream: false
      };

      console.log("Request body:", JSON.stringify(requestBody, null, 2));

      const apiResponse = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify(requestBody)
      });

      console.log("Status:", apiResponse.status);
      console.log("Status Text:", apiResponse.statusText);
      console.log("OK:", apiResponse.ok);
      console.log("Headers:", Object.fromEntries(apiResponse.headers.entries()));

      const responseText = await apiResponse.text();
      console.log("Response text:", responseText);

      if (!apiResponse.ok) {
        throw new Error(`HTTP ${apiResponse.status}: ${responseText}`);
      }

      const data = JSON.parse(responseText);
      console.log("✅ Respuesta exitosa:", data);
      
      setResponse(data.choices[0].message.content);
    } catch (err) {
      console.error("❌ Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">🧪 Prueba de Deepseek API</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          API Key configurada: {import.meta.env.VITE_DEEPSEEK_API_KEY ? "✅ Sí" : "❌ No"}
        </p>
        <p className="text-sm text-gray-600">
          Valor: {import.meta.env.VITE_DEEPSEEK_API_KEY ? `${import.meta.env.VITE_DEEPSEEK_API_KEY.substring(0, 10)}...` : "No encontrada"}
        </p>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => testAPI(false)}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "🔄 Probando..." : "🚀 Probar API Base"}
        </button>
        <button
          onClick={() => testAPI(true)}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "🔄 Probando..." : "🚀 Probar API v1"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <strong>Respuesta de Deepseek:</strong>
          <p className="mt-2">{response}</p>
        </div>
      )}
    </div>
  );
};

export default DeepseekTest;
