import {defineStore} from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => {
        return {
            light: {
                className: "light",
                bgColor: "#FFFFFF",
                secondBgColor: "#e7e5e5",
                goBackBtnColor: "#414141",
                searchBtnColor: "#070707",
                playBtnColor: "#2c2c2c",
            },
            dark: {
                className: "dark",
                bgColor: "#1C1B1B",
                secondBgColor: "#2C2B2B",
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
