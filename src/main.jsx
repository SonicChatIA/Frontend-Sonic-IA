import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet, sepolia, polygon, optimism, arbitrum, base } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { sonic } from "./chains/sonic.js";

// 🔹 Configuración de RainbowKit + Wagmi
const config = getDefaultConfig({
  appName: "Sonic IA - Transaction Assistant",
  projectId: "4764cb0b8852760547f5a36b9d826354", // WalletConnect ProjectId
  chains: [sonic, mainnet, sepolia, polygon, optimism, arbitrum, base], // Sonic primero como red principal
  ssr: true,
});

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider chains={config.chains}>
            <Router>
              <App />
            </Router>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found');
}
