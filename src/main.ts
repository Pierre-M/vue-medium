import { createApp } from "vue";
import App from "./App.vue";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { createRouter, createWebHistory } from "vue-router";
import "@purge-icons/generated";
import "./style/index.scss";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
