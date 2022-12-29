<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(["contentId", "className", "marginBottom", "height"]);
</script>

<template>
    <div
        :id="contentId"
        :class="className"
        :style="{marginBottom: marginBottom, height: height}"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
#content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin: 0 auto;
    overflow-y: auto;
    scrollbar-width: none;
}

#content.absolute {
    position: absolute;
}

#content.absolute.bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

::-webkit-scrollbar {
    display: none;
}
</style>
