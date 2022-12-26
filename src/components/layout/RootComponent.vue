<script setup>
import {ref, computed} from "vue";
import ArianaGrande from "../../assets/images/ariana-grande.png";
import Wallpaper1 from "../../assets/images/wallpaper-1.png";
const props = defineProps(["backgroundColor", "imageUrl"]);

const images = ref({ArianaGrande: ArianaGrande, Wallpaper1: Wallpaper1});
const image = computed(() => images.value[props.imageUrl]);
// new URL(`../assets/images/${image.value}.png`, import.meta.url).href;
</script>

<template>
    <section
        class="section-container"
        :style="{
            backgroundImage: `url(${image})`,
            backgroundColor: backgroundColor,
        }"
    >
        <div id="wrapper">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss">
.section-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    > * {
        width: calc(11 / 13 * 100%);
        margin: 0 auto;
    }
    #wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}
</style>
