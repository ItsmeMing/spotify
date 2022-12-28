<script setup>
import {ref, computed, inject} from "vue";
import ArianaGrande from "../../assets/images/ariana-grande.png";
import Wallpaper1 from "../../assets/images/wallpaper-1.png";

const props = defineProps(["imageUrl", "justifyContent"]);
const images = ref({ArianaGrande: ArianaGrande, Wallpaper1: Wallpaper1});
const image = computed(() => images.value[props.imageUrl]);
// new URL(`../assets/images/${image.value}.png`, import.meta.url).href;
const theme = inject("theme");
</script>

<template>
    <section
        class="container"
        :style="{
            backgroundImage: `url(${image})`,
            backgroundColor: theme?.bgColor,
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
    scrollbar-width: none;
    > * {
        width: calc(11 / 13 * 100%);
        margin: 0 auto;
        scrollbar-width: none;
    }
}
</style>
