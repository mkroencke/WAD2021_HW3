import { createRouter, createWebHistory } from "vue-router";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
