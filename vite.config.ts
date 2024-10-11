import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://zkerkeb-class.github.io/todo-list-avanc-react-svenickx',
});
