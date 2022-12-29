<script setup>
import {ref, inject, onMounted} from "vue";
import Button from "./Button.vue";

const dark = ref(null);
const light = ref(null);
const handleUsersChoice = inject("handleUsersChoice");
const goToAuth = inject("goToAuth");

const handleTheme = () => {
    if (localStorage.getItem("theme") === "light")
        light.value.classList.add("selected");
    else dark.value.classList.add("selected");
    handleUsersChoice();
};

const handleChangeTheme = (theme) => {
    dark.value.classList.remove("selected");
    light.value.classList.remove("selected");
    localStorage.setItem("theme", theme);
    handleTheme();
};
onMounted(() => {
    handleTheme();
});
</script>

<template>
    <h1>Choose Mode</h1>
    <div class="theme-section">
        <div id="dark" ref="dark" @click="handleChangeTheme('dark')">
            <Button
                width="75px"
                height="75px"
                className="btn__circle-blur"
                borderRadius="100%"
                ><img src="../assets/images/moon.png"
            /></Button>
            <h2>Dark mode</h2>
        </div>
        <div id="light" ref="light" @click="handleChangeTheme('light')">
            <Button
                width="75px"
                height="75px"
                className="btn__circle-blur"
                borderRadius="100%"
                ><img src="../assets/images/sun.png"
            /></Button>
            <h2>Light mode</h2>
        </div>
    </div>
    <Button
        fontSize="22px"
        width="100%"
        height="92px"
        className="btn-green"
        borderRadius="30px"
        signal="goToAuth"
        @goToAuth="goToAuth"
        >Continue</Button
    >
</template>

<style scoped lang="scss">
h1 {
    font-weight: 700;
    font-size: 22px;
    color: var(--white);
}

.theme-section {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 30px 0 70px 0;
    #dark,
    #light {
        button {
            margin: 0 auto;
            img {
                width: 36px;
                height: auto;
            }
        }
        h2 {
            font-weight: 700;
            font-size: 17px;
            color: var(--white);
            margin-top: 20px;
        }
    }

    #dark.selected, #light.selected {
        button {
            background-color: palevioletred;
        }
    }
}
</style>
