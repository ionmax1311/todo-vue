import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
// import Todos from "@/views/Todos.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/todos",
    // component: Todos,
    component: () => import("./views/Todos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
