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
        secondBg: false,
        leftBtn: "searchBtn",
        centerBtn: "logo",
        displayOptionsBtn: true,
        mainContent: "homepage",
        displayFooter: true,
    },
    player: {
        secondBg: false,
        leftBtn: "goBackBtn",
        centerBtn: "nowPlaying",
        displayOptionsBtn: true,
        mainContent: "songplayer",
        displayFooter: false,
    },
    profile: {
        secondBg: true,
        leftBtn: "goBackBtn",
        centerBtn: "",
        displayOptionsBtn: true,
        mainContent: "profilepage",
        displayFooter: true,
    },
    artist: {
        secondBg: false,
        leftBtn: "goBackBtn",
        displayOptionsBtn: true,
        mainContent: "artistpage",
        displayFooter: true,
    },
});

const layoutKey = ref("home");

const choseLayout = computed(() => layouts.value[layoutKey.value]);

const changeLayout = (str) => (layoutKey.value = str);

provide("changeLayout", changeLayout);
</script>

<template>
    <RootComponent :secondBg="choseLayout.secondBg">
        <Header
            :leftBtn="choseLayout.leftBtn"
            :centerBtn="choseLayout.centerBtn"
            :displayOptionsBtn="choseLayout.displayOptionsBtn"
        ></Header>
        <HomePage v-if="choseLayout.mainContent === 'homepage'" />
        <SongPlayer v-else-if="choseLayout.mainContent === 'songplayer'" />
        <ProfilePage v-else-if="choseLayout.mainContent === 'profilepage'" />
        <ArtistPage v-else-if="choseLayout.mainContent === 'artistpage'" />
        <Footer :displayFooter="choseLayout.displayFooter" />
    </RootComponent>
</template>

<style lang="scss"></style>
