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
        mainContent: "homepage",
        displayFooter: true,
    },
    player: {
        leftBtn: "goBackBtn",
        centerBtn: "nowPlaying",
        displayOptionsBtn: true,
        mainContent: "songplayer",
        displayFooter: false,
    },
    profile: {
        headerClassName: "absolute",
        leftBtn: "goBackBtn",
        centerBtn: "",
        displayOptionsBtn: true,
        mainContent: "profilepage",
        displayFooter: true,
    },
    artist: {
        headerClassName: "absolute",
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
    <RootComponent>
        <Header
            :headerClassName="choseLayout.headerClassName"
            :leftBtn="choseLayout.leftBtn"
            :centerBtn="choseLayout.centerBtn"
            :displayOptionsBtn="choseLayout.displayOptionsBtn"
        ></Header>
        <template v-if="choseLayout.mainContent === 'homepage'">
            <HomePage />
        </template>
        <template v-else-if="choseLayout.mainContent === 'songplayer'">
            <SongPlayer />
        </template>
        <template v-else-if="choseLayout.mainContent === 'profilepage'">
            <ProfilePage />
        </template>
        <template v-else-if="choseLayout.mainContent === 'artistpage'">
            <ArtistPage />
        </template>
        <Footer :displayFooter="choseLayout.displayFooter" />
    </RootComponent>
</template>

<style scoped lang="scss"></style>
