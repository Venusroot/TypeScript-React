import { defineConfig } from 'vite';
 
export default defineConfig({
  server: {
    host: true, // Permite conexões externas (essencial para containers)
    hmr: {
      // Ajusta o WebSocket para usar a porta e protocolo seguros do Codespaces
      clientPort: 443,
      protocol: 'wss',
    },
  },
});