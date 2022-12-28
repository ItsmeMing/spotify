<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject} from "vue";
import PlayBtn from "./header-btns/PlayBtn.vue";

const theme = inject("theme");
</script>

<template>
    <div class="song">
        <div class="song__image">
            <img src="../assets/images/billie-eilish-3.png" />
            <PlayBtn :width="28" :height="28"/>
        </div>
        <h1 :class="`song__name ${theme.className}`">Bad Guy</h1>
        <p :class="`song__artist ${theme.className}`">Billie Eilish</p>
    </div>
</template>

<style scoped lang="scss">
.song {
    padding-bottom: 10px;
    .song__image {
        position: relative;
        width: 147px;
        height: 185px;
        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
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
        margin-left: 10px;
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
    }
}
</style>
