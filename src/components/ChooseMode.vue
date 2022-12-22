<script setup>
import Button from "./Button.vue";
</script>

<template>
    <h1>Choose Mode</h1>
    <div class="theme-section">
        <div id="dark">
            <Button
                width="75px"
                height="75px"
                className="btn__circle-blur"
                borderRadius="100%"
                ><img src="../assets/images/moon.png"
            /></Button>
            <h2>Dark mode</h2>
        </div>
        <div id="light">
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
        width="100%"
        height="92px"
        className="btn__white-big-text"
        borderRadius="30px"
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
}
</style>
