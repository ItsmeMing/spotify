<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(["contentId", "className", "marginBottom"]);
</script>

<template>
    <div
        :id="contentId"
        :class="className"
        :style="{marginBottom: marginBottom}"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
#content {
    position: relative;
    z-index: 4;
    text-align: center;
    margin: 0 auto;
}

#content.absolute {
    position: absolute;
}

#content.absolute.bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>
