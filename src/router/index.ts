import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import todoList from "../views/todoList.vue";
import pagination from "@/views/pagination.vue";
import infiniteScroll from "@/views/infiniteScroll.vue";

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
    {
      path: "/pagination",
      name: "pagination",
      component: pagination,
    },
    {
      path: "/infiniteScroll",
      name: "infiniteScroll",
      component: infiniteScroll,
    },
  ],
});

export default router;
