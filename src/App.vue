<script setup>
import {ref, provide, onMounted} from "vue";
import {useThemeStore} from "./stores/theme";

const store = useThemeStore();
const theme = ref();

const handleUsersChoice = () => {
    if (localStorage.getItem("theme") === "light")
        theme.value = store.getLightTheme;
    else theme.value = store.getDarkTheme;
};

provide("theme", theme);
provide("handleUsersChoice", handleUsersChoice);



onMounted(() => {
    theme.value = store.detectUsersChoice();
});
</script>

<template>
    <router-view></router-view>
</template>

<style>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
