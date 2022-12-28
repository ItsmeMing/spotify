<script setup>
import {ref, provide} from "vue";
import {useRouter} from "vue-router";
import RootComponent from "../components/layout/RootComponent.vue";
import Content from "../components/layout/Content.vue";
import GetStarted from "../components/GetStarted.vue";
import ChooseMode from "../components/ChooseMode.vue";

const router = useRouter();
const imageUrl = ref("ArianaGrande");
const contentKey = ref("get-started");

const goToChooseMode = () => {
    imageUrl.value = "Wallpaper1";
    contentKey.value = "choose-mode";
};

const goToAuth = () => router.push({name: "authentication"});

provide("goToChooseMode", goToChooseMode);
provide("goToAuth", goToAuth);
</script>

<template>
    <RootComponent :imageUrl="imageUrl" justifyContent="space-between">
        <figure class="big-logo">
            <img src="../assets/images/logo.png" />
        </figure>
        <Content
            contentId="content"
            className="absolute bottom-center"
            marginBottom="70px"
        >
            <GetStarted v-if="contentKey === 'get-started'" />
            <ChooseMode v-else />
        </Content>
    </RootComponent>
</template>

<style scoped lang="scss">
.big-logo {
    img {
        display: block;
        width: 200px;
        height: auto;
        margin: 40px auto 0 auto;
    }
}
#content {
    margin-bottom: 70px;
}
</style>
