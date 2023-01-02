<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(["type", "placeholder", "className"]);
</script>

<template>
    <input :type="type" :placeholder="placeholder" :class="className" />
</template>

<style scoped lang="scss">
input {
    position: relative;
    font-family: "Satoshi", sans-serif;
    color: var(--white);
    font-size: 16px;
    width: calc(100% - 5px - 5%);
    height: 80px;
    padding: 0 5%;
    border: 2px solid var(--gray-soft);
    border-radius: 30px;
    background-color: transparent;
}
input.dark {
    color: var(--white);
    &:focus-visible {
        outline: none;
        border-color: var(--white);
    }
}

input.light {
    color: #000000;
    &:focus-visible {
        outline: none;
        border-color: #000000;
    }
}
::placeholder {
    position: absolute;
    left: 5%;
    top: 50%;
    font-family: "Satoshi", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--gray-soft);
    transform: translateY(-50%);
}
</style>
