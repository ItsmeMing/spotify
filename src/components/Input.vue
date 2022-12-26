<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(["type", "placeholder"]);
</script>

<template>
    <input :type="type" :placeholder="placeholder" />
</template>

<style scoped lang="scss">
input {
    font-family: "Satoshi", sans-serif;
    color: var(--white);
    font-size: 16px;
    width: calc(100% - 60px);
    height: 80px;
    padding: 0 29px;
    border: 1px solid var(--gray-soft);
    border-radius: 30px;
    background-color: transparent;
    &:focus-visible {
        outline: none;
        border-color: var(--white);
    }
}
::placeholder {
    font-family: "Satoshi", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--gray-soft);
}
</style>
