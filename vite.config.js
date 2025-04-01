// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',  // ビルド出力フォルダを指定
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')  // メインエントリーファイルを指定
    }
  }
});
