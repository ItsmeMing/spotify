<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject, ref} from "vue";
import Register from "./Register.vue";

defineProps([
    "fontSize",
    "width",
    "height",
    "className",
    "borderRadius",
    "fnName",
]);
const goToChooseMode = inject("handleContent");
const goToAuth = inject("goToAuth");
const childContent = inject("child-content");
const goToRegister = () => (childContent.value = Register);

const fns = ref({
    goToChooseMode: goToChooseMode,
    goToAuth: goToAuth,
    goToRegister: goToRegister,
});
const handleFunction = (name) => {
    console.log(name);
    const fn = fns.value[name];
    fn();
};
</script>

<template>
    <button
        :class="className"
        :style="{
            fontSize: fontSize,
            width: width,
            height: height,
            borderRadius: borderRadius,
        }"
        @click="handleFunction(fnName)"
    >
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
button {
    background-color: var(--green);
    border: 2px solid transparent;
    transition: all 0.2s linear;
}

.btn-green {
    color: var(--white);
    font-weight: 700;
    &:hover {
        color: var(--green);
        background-color: transparent;
        border-color: var(--green);
    }
}

.btn-transparent {
    color: var(--white);
    font-weight: 700;
    background-color: transparent;
    &:hover {
        background-color: var(--green);
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
