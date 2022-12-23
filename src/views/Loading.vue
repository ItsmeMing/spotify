<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import RootComponent from "../components/RootComponent.vue";

const router = useRouter();

onMounted(() => setTimeout(() => router.push({name: "get-started"}), 5000));
</script>

<template>
    <RootComponent :imageUrl="imageUrl">
        <div id="wrapper">
            <figure class="logo">
                <img src="../assets/images/logo.png" />
            </figure>
        </div>
    </RootComponent>
</template>

<style scoped lang="scss">
#wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--dark);
    height: 100%;
    animation: loading 1.5s linear infinite alternate;
    .logo {
        img {
            display: block;
            width: 200px;
            height: auto;
            margin: 40px auto 0 auto;
        }
    }
}

@keyframes loading {
    0% {
        filter: blur(50px);
    }
    80% {
        filter: blur(0);
    }

    100% {
        filter: blur(0);
    }
}
</style>
