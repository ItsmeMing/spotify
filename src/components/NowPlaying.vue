<script setup>
import { inject } from 'vue';

const theme = inject("theme")
</script>

<template>
    <p :class="theme.className">Now Playing</p>
</template>

<style scoped lang="scss">
p {
    font-weight: 700;
    font-size: 18px;
    line-height: 24.3px;
    color: var(--white);
}
</style>
