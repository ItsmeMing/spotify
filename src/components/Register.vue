<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject} from "vue";
import RegisterSignIn from "./RegisterSignIn.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";

const theme = inject("theme");
const handleContent = inject("handleContent");
</script>

<template>
    <RegisterSignIn
        authHeader="Register"
        footerText="Do You Have An Account?"
        swapBtn="Sign In"
    >
        <Input
            type="text"
            placeholder="Full Name"
            :className="theme.className"
        />
        <Input
            type="email"
            placeholder="Enter Email"
            :className="theme.className"
        />
        <Input
            type="password"
            placeholder="Password"
            :className="theme.className"
        />
        <Button
            fontSize="20px"
            width="100%"
            height="80px"
            className="btn-green"
            borderRadius="30px"
            signal="goToHomePage"
            @goToHomePage="handleContent('mainpage')"
            >Create Account</Button
        >
    </RegisterSignIn>
</template>

<style scoped lang="scss"></style>
