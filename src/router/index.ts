import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { makeRoute } from "./routeHelpers";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  makeRoute("download"),
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
