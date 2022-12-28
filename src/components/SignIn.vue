<script setup>
import {inject} from "vue";
import RegisterSignIn from "./RegisterSignIn.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";

const theme = inject("theme")
const handleContent = inject("handleContent");
</script>

<template>
    <RegisterSignIn
        authHeader="Sign In"
        footerText="Not A Member?"
        swapBtn="Register Now"
    >
        <Input type="text" placeholder="Enter Username Or Email" :className="theme.className"/>
        <Input type="password" placeholder="Password" :className="theme.className"/>
        <p>Recovery Password</p>
        <Button
            fontSize="20px"
            width="100%"
            height="80px"
            className="btn-green"
            borderRadius="30px"
            signal="goToHomePage"
            @goToHomePage="handleContent('mainpage')"
            >Sign In</Button
        >
    </RegisterSignIn>
</template>

<style scoped lang="scss">
p {
    font-weight: 700;
    font-size: 14px;
    color: var(--gray-soft);
    text-align: left;
    margin-left: 15px;
    cursor: pointer;
}
</style>
