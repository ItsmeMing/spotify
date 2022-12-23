<script setup>
import RegisterSignIn from "./RegisterSignIn.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
</script>

<template>
    <RegisterSignIn
        authHeader="Sign In"
        footerText="Not A Member?"
        swapBtn="Register Now"
        swapTo="goToRegister"
    >
        <Input type="text" placeholder="Enter Username Or Email" />
        <Input type="password" placeholder="Password" />
        <p>Recovery Password</p>
        <Button
            fontSize="20px"
            width="100%"
            height="80px"
            className="btn-green"
            borderRadius="30px"
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
