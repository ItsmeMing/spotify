<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject, onMounted} from "vue";
import jwt_decode from "jwt-decode";
import Button from "./Button.vue";

defineProps(["authHeader", "footerText", "swapBtn"]);

var CLIENT_ID =
    "1073820467560-r4u4qs5rr0r1drad9pefg14n45v8t2qd.apps.googleusercontent.com";

const theme = inject("theme");
const handleContent = inject("handleContent");

const google = window.google;

const handleCallbackResponse = async (res) => {
    console.log("Encoded JWT ID Token: ", res.credential);
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    await tokenClient.requestAccessToken();
};

google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCallbackResponse,
});

const tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: "profile email",
    callback: (tokenResponse) => {
        localStorage.setItem("gg_access_token", tokenResponse.access_token);
        localStorage.setItem("gg_access_token_time_received", Date.now());
        setTimeout(
            () => (window.location.href = "http://localhost:3000/login"),
            2000,
        );
    },
});

onMounted(() => {
    // global google
    google.accounts.id.renderButton(document.querySelector("#google"), {
        type: "icon",
        shape: "circle",
        theme: "outline",
        size: "large",
    });
});
</script>

<template>
    <header>
        <h1 :class="theme.className">{{ authHeader }}</h1>
        <p :class="theme.className">
            If You Need Any Support <span>Click Here</span>
        </p>
    </header>
    <div class="input-wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
    <footer>
        <h2 :class="theme.className">Or</h2>
        <div>
            <div id="google"></div>
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
    div {
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
}

footer {
    margin-bottom: 7vh;
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
        margin: 2vh 0;
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
        h6 {
            font-weight: 700;
            font-size: 14px;
        }
    }
}
</style>
