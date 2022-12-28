<script setup>
import { inject } from "vue";
import Button from "../Button.vue";

const theme = inject("theme")
</script>

<template>
    <Button
        width="32px"
        height="32px"
        :className="`btn__circle-blur ${theme.className}`"
        borderRadius="100%"
        fnName="goBackToGetStarted"
    >
        <svg
            id="go-back"
            width="5.5"
            height="11.5"
            viewBox="0 0 22 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.1118 5.13076C22.2886 3.96443 22.2971 2.06495 21.1308 0.888165C19.9644 -0.288623 18.065 -0.297097 16.8882 0.869237L9.70923 7.98439C7.00535 10.6642 4.79545 12.8544 3.22822 14.8058C1.59851 16.8351 0.41878 18.8949 0.103636 21.3674C-0.0345455 22.4515 -0.0345452 23.5485 0.103636 24.6326C0.41878 27.1051 1.59851 29.1649 3.22823 31.1942C4.79544 33.1456 7.00531 35.3358 9.70918 38.0156L16.8882 45.1308C18.065 46.2971 19.9644 46.2886 21.1308 45.1118C22.2971 43.935 22.2886 42.0356 21.1118 40.8692L14.06 33.88C11.198 31.0435 9.23478 29.0913 7.90637 27.4372C6.61598 25.8304 6.1733 24.7983 6.05548 23.874C5.98151 23.2936 5.98151 22.7064 6.05548 22.126C6.1733 21.2017 6.61598 20.1696 7.90637 18.5628C9.23478 16.9087 11.198 14.9565 14.06 12.12L21.1118 5.13076Z"
                :fill="theme.goBackBtnColor"
            />
        </svg>
    </Button>
</template>

<style scoped lang="scss">
button {
    img {
        height: 11.5px;
        width: auto;
    }
}
</style>
