import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes/routes";
import "./style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || "Karthikeyan J";
});

const app = createApp(App);
app.use(router);
app.mount("#app");
