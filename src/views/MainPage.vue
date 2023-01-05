<script setup>
import {ref, computed, provide, onBeforeMount} from "vue";
import {useRouter} from "vue-router";
import {useDataStore} from "../stores/data";
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
        centerBtn: "",
        displayOptionsBtn: true,
        mainContent: "artistpage",
        displayFooter: true,
    },
});

const router = useRouter();

const dataStore = useDataStore();

const layoutKey = ref("home");

const choseLayout = computed(() => layouts.value[layoutKey.value]);

const changeLayout = (str) => (layoutKey.value = str);

const checkToken = async () => {
    const url = window.location.search;
    const lc_access_token = localStorage.getItem("access_token");
    const lc_created_at = localStorage.getItem("created_at");
    const lc_refresh_token = localStorage.getItem("refresh_token");
    const access_token = new URLSearchParams(url).get("access_token");
    const created_at = new URLSearchParams(url).get("created_at");
    const refresh_token = new URLSearchParams(url).get("refresh_token");
    if (access_token !== null && created_at !== null) {
        if ((Date.now() - created_at) / 1000 < 3600) {
            localStorage.setItem("access_token", access_token);
            if (refresh_token !== null)
                localStorage.setItem("refresh_token", refresh_token);
            localStorage.setItem("created_at", created_at);
            await dataStore.addRandomSongs();
            await dataStore.addUsersPlaylists();
            await dataStore.addUsersInfo();
        } else {
            window.location.href = `http://localhost:3000/refresh_token?refresh_token=${lc_refresh_token}`;
        }
    } else if (lc_access_token !== null && lc_created_at !== null) {
        if ((Date.now() - lc_created_at) / 1000 < 3600) {
            await dataStore.addRandomSongs();
            await dataStore.addUsersPlaylists();
            await dataStore.addUsersInfo();
        } else {
            window.location.href = `http://localhost:3000/refresh_token?refresh_token=${lc_refresh_token}`;
        }
    } else {
        router.push({name: "get-started"});
    }
};

provide("changeLayout", changeLayout);

onBeforeMount(() => {
    checkToken();
});
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
