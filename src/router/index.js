import {createRouter, createWebHistory} from "vue-router";
import GetStartedChooseMode from "../components/GetStartedChooseMode.vue";
import GetStartedOrLogin from "../components/RegisterOrLogin.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "get-started",
            component: GetStartedChooseMode,
        },
        {
            path: "/authentication",
            name: "authentication",
            component: GetStartedOrLogin
        }
    ],
});

export default router;
