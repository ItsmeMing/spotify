<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps([
    "fontSize",
    "width",
    "height",
    "className",
    "borderRadius",
    "signal",
]);

const emits = defineEmits([
    "goToChooseMode",
    "goToAuth",
    "goToRegister",
    "goToSignIn",
    "goToHomePage",
]);

const handleSignal = (s) => {
    switch (s) {
        case "goToChooseMode":
            emits("goToChooseMode");
            break;
        case "goToAuth":
            emits("goToAuth");
            break;
        case "goToRegister":
            emits("goToRegister");
            break;
        case "goToSignIn":
            emits("goToSignIn");
            break;
        case "goToHomePage":
            emits("goToHomePage");
            break;
        default:
            break;
    }
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
        @click="handleSignal(signal)"
    >
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
button {
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-weight: 700;
    background-color: transparent;
    &:hover {
        color: var(--green) !important;
        border-color: var(--green);
    }
}

.btn-transparent.dark {
    color: var(--white);
}
.btn-transparent.light {
    color: var(--dark);
}

.btn-transparent.no-effect {
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
    &:hover {
        background: palevioletred;
    }
}

.btn__circle-blur.dark {
    background: rgba(255, 255, 255, 0.04);
}

.btn__circle-blur.light {
    background: rgba(0, 0, 0, 0.04);
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

.btn-gray-background.dark {
    background-color: var(--gray-dark);
}

.btn-gray-background.light {
    background-color: var(--gray-soft);
}
</style>
