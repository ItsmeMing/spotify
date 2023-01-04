<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject} from "vue";
import {useDataStore} from "../stores/data";
import PlayBtn from "./header-btns/PlayBtn.vue";

const props = defineProps(["song", "album"]);

const dataStore = useDataStore();
const theme = inject("theme");
const changeLayout = inject("changeLayout");

const goToArtistPage = async () => {
    await dataStore.modifyArtist(props.song?.artists[0].id);
    changeLayout("artist");
};

</script>

<template>
    <div class="song">
        <div class="song__image">
            <img :src="song?.album.images[0].url || album?.images[0].url" />
            <PlayBtn :width="28" :height="28" />
        </div>
        <h1 :class="`song__name ${theme.className}`">{{ song?.name || album?.name }}</h1>
        <p :class="`song__artist ${theme.className}`" @click="goToArtistPage">
            {{ song?.artists[0].name }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.song {
    padding-bottom: 10px;
    width: 147px;
    .song__image {
        position: relative;
        width: 100%;
        height: 185px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 30px;
        }
        button {
            position: absolute;
            top: 100%;
            right: 100%;
            width: 10.8px;
            height: auto;
            padding: 10px;
            transform: translate(-100%, -50%);
            border-radius: 100%;
        }
    }
    .song__name,
    .song__artist {
        width: 90%;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .song__name {
        font-weight: 700;
        font-size: 16px;
        line-height: 21.6px;
        margin-top: 15px;
    }
    .song__artist {
        font-weight: 400;
        font-size: 14px;
        line-height: 18.9px;
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
