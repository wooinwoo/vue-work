import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import todoList from "../views/todoList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/todoList",
      name: "todoList",
      component: todoList,
    },
  ],
});

export default router;
