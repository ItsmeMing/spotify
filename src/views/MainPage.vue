<script setup>
import {ref, computed, provide} from "vue";
import RootComponent from "../components/layout/RootComponent.vue";
import Header from "../components/layout/Header.vue";
import HomePage from "../components/HomePage.vue";
import SongPlayer from "../components/SongPlayer.vue";
import ProfilePage from "../components/ProfilePage.vue";
import ArtistPage from "../components/ArtistPage.vue";
import Footer from "../components/layout/Footer.vue";

const layouts = ref({
    home: {
        leftBtn: "searchBtn",
        centerBtn: "logo",
        displayOptionsBtn: true,
        mainContent: HomePage,
        displayFooter: true,
    },
    player: {
        leftBtn: "goBackBtn",
        centerBtn: "nowPlaying",
        displayOptionsBtn: true,
        mainContent: SongPlayer,
        displayFooter: false,
    },
    profile: {
        headerClassName: "absolute",
        leftBtn: "goBackBtn",
        displayOptionsBtn: true,
        mainContent: ProfilePage,
        displayFooter: true,
    },
    artist: {
        headerClassName: "absolute",
        leftBtn: "goBackBtn",
        displayOptionsBtn: true,
        mainContent: ArtistPage,
        displayFooter: true,
    },
});

const layoutKey = ref("home");

const changeLayout = (value) => (layoutKey.value = value);

const choseLayout = computed(() => {
    console.log(layouts.value[layoutKey.value]);
    return layouts.value[layoutKey.value];
});

provide("changeLayout", changeLayout);
</script>

<template>
    <RootComponent backgroundColor="#1C1B1B">
        <Header
            :headerClassName="choseLayout.headerClassName"
            :leftBtn="choseLayout.leftBtn"
            :centerBtn="choseLayout.centerBtn"
            :displayOptionsBtn="choseLayout.displayOptionsBtn"
        ></Header>
        <choseLayout.mainContent />
        <Footer :displayFooter="choseLayout.displayFooter" />
    </RootComponent>
</template>

<style scoped lang="scss"></style>
