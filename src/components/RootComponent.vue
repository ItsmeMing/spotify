<script setup>
defineProps(["backgroundColor", "imageUrl"]);
</script>

<template>
    <section
        class="section-container"
        :style="{
            backgroundImage: 'url(' + imageUrl + ')',
            backgroundColor: backgroundColor,
        }"
    >
        <slot></slot>
    </section>
</template>

<style lang="scss">
.section-container {
    width: 390px;
    height: 844px;
    border-radius: 43px;
}
</style>
