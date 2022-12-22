<script setup>
import {ref, shallowRef, provide} from "vue";
import RootComponent from "./RootComponent.vue";
import GetStarted from "./GetStarted.vue";
import ChooseMode from "./ChooseMode.vue";

const imageUrl = ref("https://i.imgur.com/5wmGs2H.png");
const childContent = shallowRef(GetStarted);

const handleContent = () => {
    imageUrl.value = "https://i.imgur.com/4bcbAvv.png";
    childContent.value = ChooseMode;
};

provide("handleContent", handleContent)
</script>

<template>
    <RootComponent :imageUrl="imageUrl">
        <div id="wrapper">
            <figure class="logo">
                <img src="../assets/images/logo.png" />
            </figure>
            <div class="content">
               <childContent/>
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
