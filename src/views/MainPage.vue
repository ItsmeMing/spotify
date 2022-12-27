<script setup>
import {ref} from "vue";
import RootComponent from "../components/layout/RootComponent.vue";
import Header from "../components/layout/Header.vue";
import HomePage from "../components/HomePage.vue";
import SongPlayer from "../components/SongPlayer.vue";
import Footer from "../components/layout/Footer.vue";

const leftBtn = ref("searchBtn");
const centerBtn = ref("logo");
const displayOptionsBtn = ref(true);
const mainContent = ref(SongPlayer);
</script>

<template>
    <RootComponent backgroundColor="#1C1B1B">
        <Header
            :leftBtn="leftBtn"
            :centerBtn="centerBtn"
            :displayOptionsBtn="displayOptionsBtn"
        ></Header>
        <mainContent />
        <!-- <Footer /> -->
    </RootComponent>
</template>

<style scoped lang="scss"></style>
