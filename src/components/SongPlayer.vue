<script setup>
import Content from "./layout/Content.vue";
import Player from "./Player.vue";

const contentHeight = window.innerHeight - 115;
</script>

<template>
    <Content contentId="content" :height="`${contentHeight}px`">
        <figure class="song__image">
            <img src="../assets/images/billie-eilish-3.png" />
        </figure>
        <Player></Player>
        <div>
            <svg
                id="show-lyrics"
                width="14.85"
                height="7.1"
                viewBox="0 0 46 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M40.8692 21.1118C42.0356 22.2886 43.935 22.2971 45.1118 21.1308C46.2886 19.9644 46.2971 18.065 45.1308 16.8882L38.0156 9.70923C35.3358 7.00535 33.1456 4.79545 31.1942 3.22822C29.1649 1.59851 27.1051 0.41878 24.6326 0.103636C23.5485 -0.0345455 22.4515 -0.0345452 21.3674 0.103636C18.8949 0.41878 16.8351 1.59851 14.8058 3.22823C12.8544 4.79544 10.6642 7.00531 7.98444 9.70918L0.869236 16.8882C-0.297096 18.065 -0.288624 19.9644 0.888165 21.1308C2.06495 22.2971 3.96443 22.2886 5.13076 21.1118L12.12 14.06C14.9565 11.198 16.9087 9.23478 18.5628 7.90637C20.1696 6.61598 21.2017 6.1733 22.126 6.05548C22.7064 5.98151 23.2936 5.98151 23.874 6.05548C24.7983 6.1733 25.8304 6.61598 27.4372 7.90637C29.0913 9.23478 31.0435 11.198 33.88 14.06L40.8692 21.1118Z"
                    fill="#8C8989"
                />
            </svg>
            <p>Lyrics</p>
        </div>
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
div {
    text-align: center;
    margin: 0 auto 20px auto;
    cursor: pointer;
    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 18.9px;
        color: var(--white);
        margin-top: 13px;
    }
}
</style>
