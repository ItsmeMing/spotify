<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {ref, provide} from "vue";
import {useRouter} from "vue-router";
import RootComponent from "../components/layout/RootComponent.vue";
import Content from "../components/layout/Content.vue";
import AuthIntroduction from "../components/AuthIntroduction.vue";
import Register from "../components/Register.vue";
import SignIn from "../components/SignIn.vue";
import Header from "../components/layout/Header.vue";

const router = useRouter();
const childContent = ref("auth-introduction");
const contentClass = ref("");
const showBillie = ref(true);

const handleContent = (component) => {
    if (component === "register" || component === "signin") {
        childContent.value = component;
        contentClass.value = "input";
        showBillie.value = false;
    } else {
        router.push({name: "main-page"});
    }
};

provide("handleContent", handleContent);
</script>

<template>
    <RootComponent>
        <Header
            leftBtn="goBackBtn"
            centerBtn="logo"
            :displayOptionsBtn="false"
        ></Header>
        <Content contentId="content" :className="contentClass" height="100vh">
            <AuthIntroduction
                v-if="childContent === 'auth-introduction'"
            ></AuthIntroduction>
            <Register v-else-if="childContent === 'register'"></Register>
            <SignIn v-else></SignIn>
        </Content>
        <img
            v-if="showBillie"
            id="billie"
            src="../assets/images/billie-eilish.png"
        />
    </RootComponent>
</template>

<style scoped lang="scss">
#content {
    margin-top: 110px;
    margin-bottom: 0;
    div {
        height: inherit;
    }
}
#content.input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0;
}

img#billie {
    position: absolute;
    z-index: 1;
    left: calc((1 - (11 / 13)) * 50% * 2.5);
    top: 100%;
    width: 116vw;
    height: auto;
    transform: translate(-50%, -100%) rotate(43.5deg);
}
</style>
