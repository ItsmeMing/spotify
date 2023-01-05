<script setup>
import {ref, inject, computed, onBeforeMount} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useDataStore} from "../stores/data";
import Song from "./Song.vue";

const dataStore = useDataStore();
const info = ref();
const theme = inject("theme");
const textColor = computed(() => theme.value.className);

onBeforeMount(() => {
    info.value = dataStore.getUsersInfo;
});
</script>

<template>
    <section class="profile" :style="{backgroundColor: theme.secondBgColor}">
        <h1 :class="textColor">Profile</h1>
        <img :src="info?.images[0].url" />
        <p class="email">{{ info?.email }}</p>
        <p :class="`name ${textColor}`">{{ info?.display_name }}</p>
        <div class="social">
            <div class="social__item">
                <h2 :class="textColor">{{ info?.followers.total }}</h2>
                <p :class="textColor">Followers</p>
            </div>
            <!-- <div class="social__item">
                <h2 :class="textColor">243</h2>
                <p :class="textColor">Following</p>
            </div> -->
        </div>
    </section>
    <h1 :class="`playlist__heading ${textColor}`">PUBLIC PLAYLISTS</h1>
    <ul class="playlist">
        <li
            class="playlist__item"
            v-for="(playlist, key) in dataStore.getUsersPlaylists"
            :key="key"
        >
            <Song :playlist="playlist">
                <template v-slot:left-btn>
                    <img
                        :src="playlist.images[0].url"
                        :style="{
                            width: '58px',
                            height: '56px',
                            objectFit: 'cover',
                            borderRadius: '14px',
                        }"
                    />
                </template>
                <template v-slot:right-btn>
                    <FontAwesomeIcon icon="fa-solid fa-ellipsis" :style="{color:
                    theme.searchBtnColor}"/>
                </template>
            </Song>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.profile {
    text-align: center;
    width: 100vw;
    margin-left: calc((100vw - 100%) * -0.5);
    border-radius: 0 0 66px 66px;
    h1 {
        font-weight: 700;
        font-size: 17px;
        line-height: 22.95px;
        padding-top: 45px;
        margin-bottom: 20px;
    }
    img {
        width: 96px;
        height: auto;
        border-radius: 100%;
    }
    .email {
        font-weight: 400;
        font-size: 12px;
        line-height: 16.2px;
        color: var(--gray-soft);
        margin: 8px 0 10px 0;
    }
    .name {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
    }
    .social {
        display: flex;
        gap: 120px;
        justify-content: center;
        padding: 20px 0;
        h2 {
            font-weight: 700;
            font-size: 20px;
            line-height: 27px;
        }
        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 18.9px;
        }
    }
}
.playlist__heading {
    font-weight: 700;
    font-size: 15px;
    line-height: 20.25px;
    margin: 20px auto;
}
.playlist {
    height: calc(100vh - 428px - 75px);
    overflow: auto;
    .playlist__item {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
