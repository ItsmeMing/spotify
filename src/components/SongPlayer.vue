<script setup>
import Content from "./layout/Content.vue";
import Player from "./Player.vue";
</script>

<template>
    <Content>
        <figure class="song__image">
            <img src="../assets/images/billie-eilish-3.png" />
        </figure>
        <Player></Player>
    </Content>
</template>

<style scoped lang="scss">
figure {
    aspect-ratio: 335/370;
    margin-top: 30px;
    filter: drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.04));
    border-radius: 30px;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}
</style>
