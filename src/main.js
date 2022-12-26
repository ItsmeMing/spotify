import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/reset.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

/* import the fontawesome core */
import {library} from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

/* add icons to the library */
import {
    faEllipsisVertical,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEllipsisVertical, faMagnifyingGlass);

app.component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
