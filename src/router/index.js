import {createRouter, createWebHistory} from "vue-router";
import Loading from "../views/Loading.vue";
import GetStartedChooseMode from "../views/GetStartedChooseMode.vue";
import Authentication from "../views/Authentication.vue";
import MainPage from "../views/MainPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "loading",
            component: Loading,
        },
        {
            path: "/get-started",
            name: "get-started",
            component: GetStartedChooseMode,
        },
        {
            path: "/authentication",
            name: "authentication",
            component: Authentication,
        },
        {
            path: "/main-page",
            name: "main-page",
            component: MainPage,
        },
    ],
});

export default router;
