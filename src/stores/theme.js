import {defineStore} from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => {
        return {
            light: {
                className: "light",
                bgColor: "#FFFFFF",
                darkerBgColor: "#F5F5F5",
                goBackBtnColor: "#414141",
                searchBtnColor: "#070707",
                playBtnColor: "#2c2c2c",
            },
            dark: {
                className: "dark",
                bgColor: "#1C1B1B",
                darkerBgColor: "#070707",
                goBackBtnColor: "#dddddd",
                searchBtnColor: "#ffffff",
                playBtnColor: "#797979",
            },
        };
    },
    getters: {
        getState: (state) => state,
        getLightTheme: (state) => state.light,
        getDarkTheme: (state) => state.dark,
    },
    actions: {
        detectUsersChoice() {
            if (localStorage.getItem("theme") === "light")
                return this.getLightTheme;
            else return this.getDarkTheme;
        },
    },
});
