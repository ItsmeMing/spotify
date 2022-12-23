<script setup>
import { ref, computed } from "vue";
import ArianaGrande from "../assets/images/ariana-grande.png";
import Wallpaper1 from "../assets/images/wallpaper-1.png";
const props = defineProps(["backgroundColor", "imageUrl"]);

const images = ref({ArianaGrande: ArianaGrande, Wallpaper1: Wallpaper1});
const image = computed(() => images.value[props.imageUrl])
// new URL(`../assets/images/${image.value}.png`, import.meta.url).href;
</script>

<template>
    <section
        class="section-container"
        :style="{
            backgroundImage: `url(${image})`,
            backgroundColor: backgroundColor
        }"
    >
        <slot></slot>
    </section>
</template>

<style lang="scss">
.section-container {
    width: 390px;
    height: 844px;
    border-radius: 43px;
}
</style>
