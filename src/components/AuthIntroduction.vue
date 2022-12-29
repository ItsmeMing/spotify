<script setup>
import {inject} from "vue";
import Button from "./Button.vue";

const btnWidth = (5 / 11) * 100;
const theme = inject("theme");
const handleContent = inject("handleContent");
</script>

<template>
    <figure class="logo">
        <img src="../assets/images/logo.png" />
    </figure>
    <h1 :class="theme.className">Enjoy Listening To Music</h1>
    <p :class="theme.className">
        Spotify is a proprietary Swedish audio streaming and media services
        provider
    </p>
    <div>
        <Button
            fontSize="19px"
            :width="btnWidth + '%'"
            height="75px"
            className="btn-green"
            borderRadius="30px"
            signal="goToRegister"
            @goToRegister="handleContent('register')"
            >Register</Button
        >
        <Button
            fontSize="19px"
            :width="btnWidth + '%'"
            height="75px"
            :className="`btn-transparent ${theme.className}`"
            borderRadius="30px"
            signal="goToSignIn"
            @goToSignIn="handleContent('signin')"
            >Sign in</Button
        >
    </div>
</template>

<style scoped lang="scss">
* {
    text-align: center;
}
figure {
    margin-top: calc(13vh - 40px);
    img {
        display: block;
        width: 235px;
        height: auto;
        margin: 0 auto;
    }
}
h1 {
    color: var(--white);
    font-weight: 700;
    font-size: 26px;
    margin-top: 55px;
}

p {
    color: var(--gray-soft);
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    margin: 20px 0 30px 0;
}

div {
    display: flex;
    justify-content: space-between;
}
</style>
