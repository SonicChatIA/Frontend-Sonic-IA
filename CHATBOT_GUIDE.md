# 🤖 Sonic Transaction Bot - Guía de Uso

## 📋 Descripción
ChatBot inteligente integrado con el contrato TransactionManager desplegado en Sepolia Testnet. Utiliza la API de Deepseek para procesamiento de lenguaje natural y permite realizar transacciones ETH mediante comandos conversacionales.

## 🔧 Configuración Técnica

### Contrato Inteligente
- **Dirección:** `0x760156EE5D01BD779F03556083555bd6836d358a`
- **Red:** Sepolia Testnet (Chain ID: 11155111)
- **Explorer:** https://sepolia.etherscan.io/address/0x760156ee5d01bd779f03556083555bd6836d358a

### Tecnologías Utilizadas
- **Frontend:** React + Vite
- **Web3:** Wagmi + RainbowKit
- **IA:** Deepseek API
- **Styling:** Tailwind CSS

## 🚀 Funcionalidades

### 1. Conexión de Wallet
- Conecta tu wallet MetaMask o compatible
- Cambio automático a Sepolia Testnet
- Visualización del estado de conexión

### 2. Chat Inteligente
- Procesamiento de lenguaje natural con Deepseek
- Interpretación de comandos de transacción
- Respuestas contextuales y ayuda

### 3. Transacciones ETH
**Comandos válidos:**
```
Send 0.001 ETH to 0xF507Baf56754091Fc700d3cac895F005AF446fF4
Send 0.5 ETH to Omar
Transfer 0.1 ETH to 0x742d35Cc6cC4b0b0bF5d3f3d0b3c1c7b8c9c0c0c
```

**Proceso:**
1. El bot analiza el comando
2. Valida dirección y cantidad
3. Muestra resumen de transacción
4. Usuario confirma o cancela
5. Ejecución en blockchain
6. Confirmación con hash de transacción

### 4. Gestión de Contactos
- Agregar contactos con nombre y dirección
- Usar nombres en lugar de direcciones largas
- Eliminar contactos
- Validación automática de direcciones

### 5. Historial de Transacciones
- Registro de todas las transacciones realizadas
- Estado de confirmación
- Enlaces a Etherscan
- Timestamp de ejecución

## 💡 Comandos Disponibles

### Transacciones
```bash
"Send [cantidad] ETH to [dirección/nombre]"
"Transfer [cantidad] ETH to [dirección/nombre]"
"Enviar [cantidad] ETH a [dirección/nombre]"
```

### Consultas Generales
- "¿Cómo funciona Ethereum?"
- "Explícame qué son los smart contracts"
- "¿Cuál es mi balance?"
- "Ayuda con transacciones"

## 🛡️ Seguridad

### Validaciones Implementadas
- ✅ Validación de direcciones Ethereum (formato 0x + 40 caracteres hex)
- ✅ Validación de cantidades (números positivos)
- ✅ Verificación de conexión de wallet
- ✅ Confirmación manual antes de envío
- ✅ Red específica (Sepolia Testnet)

### Buenas Prácticas
- Siempre verifica la dirección de destino
- Comienza con cantidades pequeñas para pruebas
- Guarda los hash de transacción importantes
- Mantén actualizado el navegador y wallet

## 🔄 Flujo de Transacción

1. **Análisis de Comando**
   - El bot interpreta el mensaje del usuario
   - Extrae cantidad, destinatario y tipo de operación
   - Valida formato y datos

2. **Preparación**
   - Muestra resumen de la transacción
   - Calcula gas estimado
   - Presenta botones de confirmación/cancelación

3. **Ejecución**
   - Crea transacción en el contrato
   - Espera confirmación de blockchain
   - Actualiza historial

4. **Confirmación**
   - Muestra hash de transacción
   - Proporciona enlace a Etherscan
   - Registra en historial local

## 🐛 Resolución de Problemas

### Wallet no se conecta
- Verifica que MetaMask esté instalado
- Actualiza el navegador
- Recarga la página

### Transacción falla
- Verifica que tengas ETH suficiente en Sepolia
- Confirma que la dirección sea válida
- Revisa que estés en la red correcta

### Bot no responde
- Verifica conexión a internet
- Revisa la consola del navegador
- Intenta refrescar la página

## 📝 Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:
```
VITE_DEEPSEEK_API_KEY=tu_api_key_aqui
```

## 🚀 Ejecución Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🔗 Enlaces Útiles

- **Contrato en Etherscan:** https://sepolia.etherscan.io/address/0x760156ee5d01bd779f03556083555bd6836d358a
- **Sepolia Faucet:** https://sepoliafaucet.com/
- **MetaMask:** https://metamask.io/
- **Deepseek AI:** https://platform.deepseek.com/

---

## 📞 Soporte

Para reportar bugs o solicitar nuevas funcionalidades, por favor crea un issue en el repositorio del proyecto.

**¡Disfruta usando Sonic Transaction Bot! 🚀**
