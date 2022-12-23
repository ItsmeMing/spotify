<script setup>
import Button from "./Button.vue";

const btnWidth = (5 / 11) * 100;
console.log(btnWidth);

defineProps(["authHeader"]);

</script>

<template>
    <h1>Enjoy Listening To Music</h1>
    <p>
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
            fnName="goToRegister"
            >Register</Button
        >
        <Button
            fontSize="19px"
            :width="btnWidth + '%'"
            height="75px"
            className="btn-transparent"
            borderRadius="30px"
            >Sign in</Button
        >
    </div>
</template>

<style scoped lang="scss">
h1 {
    color: var(--white);
    font-weight: 700;
    font-size: 26px;
}

p {
    color: var(--gray-soft);
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    margin: 20px 0 30px 0;
}

div {
    display: flex;
    justify-content: space-between;
}
</style>
