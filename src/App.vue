<script setup>
import {ref, provide, onMounted} from "vue";
import {useThemeStore} from "./stores/theme";

const store = useThemeStore();
const theme = ref();

provide("theme", theme);
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
