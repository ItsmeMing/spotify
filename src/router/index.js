import {createRouter, createWebHistory} from "vue-router";
import GetStartedChooseMode from "../views/GetStartedChooseMode.vue";
import Authentication from "../views/Authentication.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/get-started",
            name: "get-started",
            component: GetStartedChooseMode,
        },
        {
            path: "/authentication",
            name: "authentication",
            component: Authentication
        }
    ],
});

export default router;
