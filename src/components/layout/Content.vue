<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject, onMounted, onBeforeUnmount} from "vue";
defineProps(["contentId", "className", "marginBottom", "height"]);

const isScrolling = inject("isScrolling");
const handleHeader = (e) => {
    if (e.target.scrollTop >= 1) {
        isScrolling.value = true;
    } else {
        isScrolling.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleHeader);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleHeader);
});
</script>

<template>
    <div
        :id="contentId"
        :class="className"
        :style="{marginBottom: marginBottom, height: height}"
        @scroll="handleHeader($event)"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
#content {
    position: relative;
    z-index: 3;
    text-align: center;
    margin: 0 auto;
    overflow-x: hidden;
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
