import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'vant',
    //       esModule: true,
    //       resolveStyle: (name) => `./../src/css/vant/lib/${name}/index.less`
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }

})
