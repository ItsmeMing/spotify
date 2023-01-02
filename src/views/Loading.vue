<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import RootComponent from "../components/layout/RootComponent.vue";

const router = useRouter();

onMounted(() =>
    setTimeout(() => {
        if (localStorage.getItem("ggAccessTokenTime") === null) {
            const ggTokenTimeRemaining = localStorage.getItem(
                "ggAccessTokenTimeReceived",
            );
            // const spotifyTokenTimeRemaining = localStorage.getItem(
            //     "spotifyAccesssTokenTimeReceived",
            // );
            const now = Date.now()
            if (Math.floor((now - ggTokenTimeRemaining)/ 1000) < 3600) {
                router.push({name: "main-page"});
            }
            else router.push({name: "get-started"})
        }
    }, 5000),
);
</script>

<template>
    <RootComponent
        :imageUrl="imageUrl"
        backgroundColor="#070707"
        justifyContent="center"
    >
        <figure class="logo">
            <img src="../assets/images/logo.png" />
        </figure>
    </RootComponent>
</template>

<style scoped lang="scss">
.logo {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    img {
        display: block;
        width: 200px;
        height: auto;
        margin: 0 auto;
    }
}
</style>
