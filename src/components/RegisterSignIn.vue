<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject} from "vue";
import Button from "./Button.vue";

defineProps(["authHeader", "footerText", "swapBtn"]);

const theme = inject("theme");
const handleContent = inject("handleContent");
</script>

<template>
    <header>
        <h1 :class="theme.className">{{ authHeader }}</h1>
        <p :class="theme.className">If You Need Any Support <span>Click Here</span></p>
    </header>
    <div class="input-wrapper">
        <slot></slot>
    </div>
    <footer>
        <h2 :class="theme.className">Or</h2>
        <div>
            <img src="../assets/images/google.png" />
            <img src="../assets/images/apple.png" />
        </div>
        <section>
            <h6 :class="theme.className">
                {{ footerText }}
            </h6>
            <Button
                v-if="swapBtn === 'Register Now'"
                fontSize="14px"
                height="14px"
                className="btn-blue-text"
                signal="goToRegister"
                @goToRegister="handleContent('register')"
                >{{ swapBtn }}</Button
            >
            <Button
                v-else-if="swapBtn === 'Sign In'"
                fontSize="14px"
                height="14px"
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
    margin-top: 70px;
    h1 {
        font-weight: 700;
        font-size: 30px;
        margin: 50px 0 20px 0;
    }
    p {
        font-weight: 400;
        font-size: 12px;
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
        h6 {
            font-weight: 700;
            font-size: 14px;
        }
    }
}
</style>
