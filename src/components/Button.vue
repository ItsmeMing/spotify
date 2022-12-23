<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject, ref} from "vue";

defineProps(["width", "height", "className", "borderRadius", "fnName"]);

const goToChooseMode = inject("handleContent");
const fns = ref({});
fns.value.goToChooseMode = goToChooseMode;
const handleFunction = (name) => {
    const fn = fns.value[name];
    fn();
};
</script>

<template>
    <button
        :class="className"
        :style="{width: width, height: height, borderRadius: borderRadius}"
        @click="handleFunction(fnName)"
    >
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
button {
    background-color: var(--green);
    border: 2px solid transparent;
    transition: background 0.2s linear;
}

.btn__white-big-text {
    color: var(--white);
    font-weight: 700;
    font-size: 22px;
    &:hover {
        color: var(--green);
        background-color: transparent;
        border-color: var(--green);
    }
}

.btn__circle-blur {
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(43.5px);
    &:hover {
        background: palevioletred;
    }
}
</style>
