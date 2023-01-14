import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/home.vue"),
    },
    {
        path: "/display",
        name: "display",
        component: () => import("../views/display.vue"),
    },
    {
        path: "/dataEntry",
        name: "dataEntry",
        component: () => import("../views/dataEntry.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
