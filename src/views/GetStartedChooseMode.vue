<script setup>
import {ref, shallowRef, provide} from "vue";
import {useRouter} from "vue-router";
import RootComponent from "../components/RootComponent.vue";
import GetStarted from "../components/GetStarted.vue";
import ChooseMode from "../components/ChooseMode.vue";

const router = useRouter();

const imageUrl = ref("ArianaGrande");
const childContent = shallowRef(GetStarted);

const handleContent = () => {
    imageUrl.value = "Wallpaper1";
    childContent.value = ChooseMode;
};

const goToAuth = () => router.push({name: "authentication"});

provide("handleContent", handleContent);
provide("goToAuth", goToAuth);
</script>

<template>
    <RootComponent :imageUrl="imageUrl">
        <div id="wrapper">
            <figure class="logo">
                <img src="../assets/images/logo.png" />
            </figure>
            <div class="content">
                <childContent />
            </div>
        </div>
    </RootComponent>
</template>

<style scoped lang="scss">
#wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .logo {
        img {
            display: block;
            width: 200px;
            height: auto;
            margin: 40px auto 0 auto;
        }
    }
    .content {
        text-align: center;
        width: calc(11 / 13 * 100%);
        margin: 0 auto 70px auto;
    }
}
</style>
