<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { inject } from "vue";
import GoBackBtn from "../header-btns/GoBackBtn.vue";
import SearchBtn from "../header-btns/SearchBtn.vue";
import Logo from "../header-btns/Logo.vue";
import NowPlaying from "../NowPlaying.vue";

defineProps([
    "leftBtn",
    "centerBtn",
    "displayOptionsBtn",
]);

const theme = inject("theme")
</script>

<template>
    <header id="header">
        <div v-if="leftBtn === 'searchBtn'">
            <SearchBtn />
        </div>
        <div v-else>
            <GoBackBtn />
        </div>
        <div>
            <div v-if="centerBtn === 'logo'">
                <Logo />
            </div>
            <div v-else-if="centerBtn === 'nowPlaying'">
                <NowPlaying />
            </div>
            <div v-else></div>
        </div>
        <div>
            <FontAwesomeIcon
                icon="fa-solid fa-ellipsis-vertical"
                v-if="displayOptionsBtn"
                :style="{color: theme.searchBtnColor}"
            />
        </div>
    </header>
</template>

<style lang="scss">
#header {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px !important;
    div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        &:first-child > * {
            margin-right: auto;
        }
        &:last-child > * {
            margin-left: auto;
        }
        svg {
            display: block;
            font-size: 24px;
            cursor: pointer;
        }
    }
}
</style>
