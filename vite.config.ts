import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import PurgeIcons from "vite-plugin-purge-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), Pages(), Layouts(), PurgeIcons()],
});
