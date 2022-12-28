<script setup>
import {inject} from "vue";
import Button from "./Button.vue";

const goToChooseMode = inject("goToChooseMode");
</script>

<template>
    <h1>Enjoy Listening To Music</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim
        purus sed phasellus. Cursus ornare id scelerisque aliquam.
    </p>
    <Button
        fontSize="22px"
        width="100%"
        height="92px"
        className="btn-green"
        borderRadius="30px"
        signal="goToChooseMode"
        @goToChooseMode="goToChooseMode"
        >Get Started</Button
    >
</template>

<style scoped lang="scss">
h1 {
    font-weight: 700;
    font-size: 25px;
    color: var(--white);
}

p {
    font-weight: 400;
    font-size: 17px;
    color: var(--gray-soft);
    width: 90%;
    margin: 20px auto 40px auto;
}
</style>
