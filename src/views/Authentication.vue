<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {ref, shallowRef, provide} from "vue";
import {useRouter} from "vue-router";
import RootComponent from "../components/layout/RootComponent.vue";
import Content from "../components/layout/Content.vue";
import AuthIntroduction from "../components/AuthIntroduction.vue";
import Register from "../components/Register.vue";
import SignIn from "../components/SignIn.vue";
import Header from "../components/layout/Header.vue";


const router = useRouter();
const childContent = shallowRef(AuthIntroduction);
const contentClass = ref("");
const showBillie = ref(true);

const handleContent = (component) => {
    if (component === "register") {
        childContent.value = Register;
        showBillie.value = false;
    } else if (component === "signin") {
        childContent.value = SignIn;
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
        <Content contentId="content" :className="contentClass">
            <childContent></childContent>
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
    width: 453px;
    height: auto;
    transform: translate(-50%, -100%) rotate(43.5deg);
}
</style>
