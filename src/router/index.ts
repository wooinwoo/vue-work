import { createRouter, createWebHistory } from "vue-router";
import homeView from "../views/homeView.vue";
import searchBar from "@/views/searchBar.vue";
import todoList from "../views/todoList.vue";
import pagination from "@/views/pagination.vue";
import infiniteScroll from "@/views/infiniteScroll.vue";
import webeditor from "@/views/webeditor.vue";
import signIn from "@/views/signIn.vue";
import signUp from "@/views/signUp.vue";
import contactUs from "@/views/contactUs.vue";
import socialLogin from "@/views/socialLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/searchBar",
      name: "searchBar",
      component: searchBar,
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
    {
      path: "/webeditor",
      name: "webeditor",
      component: webeditor,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: signIn,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: signUp,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: contactUs,
    },
    {
      path: "/social-login",
      name: "socialLogin",
      component: socialLogin,
    },
  ],
});

export default router;
