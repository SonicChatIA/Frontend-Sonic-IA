// src/chains/sonic.js
export const sonic = {
  id: 146,
  name: 'Sonic',
  network: 'sonic',
  nativeCurrency: {
    name: 'S',
    symbol: 'S',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.soniclabs.com'] },
    public:  { http: ['https://rpc.soniclabs.com'] },
  },
  blockExplorers: {
    default: { name: 'Sonicscan', url: 'https://sonicscan.org' },
  },
  testnet: false,
};