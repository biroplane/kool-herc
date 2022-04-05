import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import dynamicImport from "vite-plugin-dynamic-import";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV ==='production'? path.resolve(__dirname, "./dist/") :'/',
  plugins: [
    vue(),
    dynamicImport(),
    Pages({ dirs: "src/pages" }),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "default",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "tailwind.config.js": resolve(__dirname, "tailwind.config.js"),
      "./runtimeConfig": "./runtimeConfig.browser",
      // "aws4": resolve(__dirname,'./node_modules/aws4/aws4.js' )
      // [find: "./runtimeConfig",
      // replacement: "./runtimeConfig.browser",
      // customResolver(url: unknown) {
      //   console.log("customResolver", url); // or throw an error for demo
      //   return url;
      // }],
    },
  },
  optimizeDeps: {
    include: ["tailwind.config.js"],
  }
})
