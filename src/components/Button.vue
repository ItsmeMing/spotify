<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject, ref} from "vue";
import {useRouter} from "vue-router";
import Register from "./Register.vue";
import SignIn from "./SignIn.vue";

defineProps([
    "fontSize",
    "width",
    "height",
    "className",
    "borderRadius",
    "fnName",
    "btnRef",
]);

const router = useRouter();

const goToChooseMode = inject("handleContent");

const dark = inject("dark");
const light = inject("light");
const chooseDark = () => {
    console.log(dark.value.classList, light.value.classList);
    dark.value.classList.remove("selected");
    light.value.classList.remove("selected");
    dark.value.classList.add("selected");
};

const chooseLight = () => {
    dark.value.classList.remove("selected");
    light.value.classList.remove("selected");
    light.value.classList.add("selected");
};

const goToAuth = inject("goToAuth");
const goBackToGetStarted = () => {
    router.push({name: "get-started"});
};
const childContent = inject("child-content");
const contentClass = inject("content-class");
const showBillie = inject("show-billie");
const goToRegister = () => {
    childContent.value = Register;
    contentClass.value = "input";
    showBillie.value = false;
};

const goToSignIn = () => {
    childContent.value = SignIn;
    contentClass.value = "input";
    showBillie.value = false;
};

const fns = ref({
    goToChooseMode: goToChooseMode,
    chooseDark: chooseDark,
    chooseLight: chooseLight,
    goToAuth: goToAuth,
    goBackToGetStarted: goBackToGetStarted,
    goToRegister: goToRegister,
    goToSignIn: goToSignIn,
});
const handleFunction = (name) => {
    const fn = fns.value[name];
    fn();
};
</script>

<template>
    <button
        :ref="btnRef"
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
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
    cursor: pointer;
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

.btn-transparent-no-effect {
    color: var(--white);
    font-weight: 700;
    background-color: transparent;
    &:hover {
        color: none;
        background-color: none;
        border-color: none;
    }
}

.btn__circle-blur {
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(43.5px);
    &:hover {
        background: palevioletred;
    }
}

.btn__circle-blur.selected {
    background: palevioletred;
}

.btn-blue-text {
    font-weight: 700;
    color: var(--blue);
    width: fit-content;
    background-color: transparent;
}
</style>
