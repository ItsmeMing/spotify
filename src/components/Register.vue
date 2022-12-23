<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import RegisterSignIn from "./RegisterSignIn.vue";

defineProps(["authHeader"]);
</script>

<template>
    <RegisterSignIn authHeader="Register"> </RegisterSignIn>
</template>

<style scoped lang="scss">
h1 {
    font-weight: 700;
    font-size: 22px;
    color: var(--white);
}
</style>
