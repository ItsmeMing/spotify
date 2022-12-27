<script setup>
import {ref, computed} from "vue";
import ArianaGrande from "../../assets/images/ariana-grande.png";
import Wallpaper1 from "../../assets/images/wallpaper-1.png";
const props = defineProps(["backgroundColor", "imageUrl", "justifyContent"]);

const images = ref({ArianaGrande: ArianaGrande, Wallpaper1: Wallpaper1});
const image = computed(() => images.value[props.imageUrl]);
// new URL(`../assets/images/${image.value}.png`, import.meta.url).href;
</script>

<template>
    <section
        class="container"
        :style="{
            backgroundImage: `url(${image})`,
            backgroundColor: backgroundColor,
        }"
    >
        <slot></slot>
    </section>
</template>

<style lang="scss">
.container {
    width: inherit;
    min-height: 100vh;
    height: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: auto;
    scrollbar-width: none;
    > * {
        width: calc(11 / 13 * 100%);
        margin: 0 auto;
        scrollbar-width: none;
    }
    // #wrapper {
    //     position: relative;
    //     display: flex;
    //     flex-direction: column;
    //     height: 100vh !important;
    //     overflow: auto;
    //     //firefox
    //     scrollbar-width: none;
    // }
}
::-webkit-scrollbar {
    display: none;
}
</style>
