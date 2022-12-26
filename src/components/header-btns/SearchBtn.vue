<script setup>
import Button from "../Button.vue";
</script>

<template>
    <Button
        width="32px"
        height="32px"
        className="btn-transparent-no-effect"
        borderRadius="100%"
    >
        <img src="../../assets/images/search.png" />
    </Button>
</template>

<style scoped lang="scss">
img {
    width: 100%;
    height: auto;
}
</style>
