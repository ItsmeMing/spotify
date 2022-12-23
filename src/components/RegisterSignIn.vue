<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(["authHeader"]);
</script>

<template>
    <h1>{{ authHeader }}</h1>
    <p>If You Need Any Support <span>Click Here</span></p>
    <div>
        <slot></slot>
    </div>

</template>

<style scoped lang="scss">
h1 {
    font-weight: 700;
    font-size: 30px;
    color: var(--white);
    margin-bottom: 20px;
    p {
        font-weight: 400;
        font-size: 12px;
        color: var(--white);
        span {

        }
    }
}
</style>
