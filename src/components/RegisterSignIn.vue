<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject} from "vue";
import Button from "./Button.vue";

defineProps(["authHeader", "footerText", "swapBtn"]);

const handleContent = inject("handleContent");
</script>

<template>
    <header>
        <h1>{{ authHeader }}</h1>
        <p>If You Need Any Support <span>Click Here</span></p>
    </header>
    <div class="input-wrapper">
        <slot></slot>
    </div>
    <footer>
        <h2>Or</h2>
        <div>
            <img src="../assets/images/google.png" />
            <img src="../assets/images/apple.png" />
        </div>
        <section>
            <p>
                {{ footerText }}
            </p>
            <Button
                v-if="swapBtn === 'Register Now'"
                fontSize="14px"
                className="btn-blue-text"
                signal="goToRegister"
                @goToRegister="handleContent('register')"
                >{{ swapBtn }}</Button
            >
            <Button
                v-else-if="swapBtn === 'Sign In'"
                fontSize="14px"
                className="btn-blue-text"
                signal="goToSignIn"
                @goToSignIn="handleContent('signin')"
                >{{ swapBtn }}</Button
            >
        </section>
    </footer>
</template>

<style scoped lang="scss">
header {
    h1 {
        font-weight: 700;
        font-size: 30px;
        color: var(--white);
        margin: 50px 0 20px 0;
    }
    p {
        font-weight: 400;
        font-size: 12px;
        color: var(--white);
        span {
            color: var(--green);
            cursor: pointer;
        }
    }
}
.input-wrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
}

footer {
    margin-bottom: 60px;
    h2 {
        position: relative;
        font-weight: 400;
        font-size: 12px;
        width: 100%;
        color: var(--white);
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 45%;
            height: 2px;
            background: linear-gradient(#5b5b5b 55%, #252525 100%);
            transform: translateY(-50%);
        }
        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            width: 45%;
            height: 2px;
            background: linear-gradient(#252525 55%, #5b5b5b 100%);
            transform: translateY(-50%);
        }
    }
    div {
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: center;
        margin: 50px 0;
        img {
            width: 30px;
            height: auto;
            cursor: pointer;
            &:last-child {
                margin-bottom: 6.57px;
            }
        }
    }
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        p {
            font-weight: 700;
            font-size: 14px;
            color: var(--white);
        }
    }
}
</style>
