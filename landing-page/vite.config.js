import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Se houver CNAME na pasta public ou a variável VITE_BASE_PATH for informada,
// usa raiz ('/'). Caso contrário, mantém '/efb-advocacia/' para o GitHub Pages padrão.
const hasCustomDomain = fs.existsSync('./public/CNAME') || Boolean(process.env.VITE_BASE_PATH);
const base = process.env.VITE_BASE_PATH || (hasCustomDomain ? '/' : (process.env.NODE_ENV === 'production' ? '/efb-advocacia/' : '/'));

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'full-reload',
      handleHotUpdate({ server }) {
        server.ws.send({ type: 'full-reload' });
        return [];
      }
    }
  ],
})
