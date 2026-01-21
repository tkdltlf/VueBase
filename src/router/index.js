import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Hello",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/daisy",
    name: "daisyUi",
    component: () => import("@/components/DaisyUI.vue"),
  },
  {
    path: "/tail",
    name: "tailWinds",
    component: () => import("@/components/TailWinds.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
