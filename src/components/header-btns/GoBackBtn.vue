<script setup>
import Button from "../Button.vue";
</script>

<template>
    <Button
        width="32px"
        height="32px"
        className="btn__circle-blur"
        borderRadius="100%"
        fnName="goBackToGetStarted"
    >
        <img src="../../assets/images/go-back.png" />
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
