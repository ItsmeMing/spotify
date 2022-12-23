<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {provide} from "vue";
import RootComponent from "../components/RootComponent.vue";
import AuthIntroduction from "../components/AuthIntroduction.vue";
// import RegisterSignIn from "../components/RegisterSignIn.vue";
import Button from "../components/Button.vue";
import {shallowRef} from "vue";

const childContent = shallowRef(AuthIntroduction);

provide("child-content", childContent);
</script>

<template>
    <RootComponent backgroundColor="#1C1B1B">
        <div id="wrapper">
            <div class="header">
                <Button
                    width="32px"
                    height="32px"
                    className="btn__circle-blur"
                    borderRadius="100%"
                    ><img src="../assets/images/go-back.png"
                /></Button>
                <figure class="logo">
                    <img src="../assets/images/logo.png" />
                </figure>
            </div>
            <div class="content">
                <childContent></childContent>
            </div>
            <img id="billie" src="../assets/images/billie-eilish.png" />
        </div>
    </RootComponent>
</template>

<style scoped lang="scss">
#wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;

    > * {
        width: calc(11 / 13 * 100%);
        margin: 0 auto;
    }
    .header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        button {
            position: absolute;
            left: 0;
            img {
                height: 11.5px;
                width: auto;
            }
        }
        figure {
            display: flex;
            justify-content: center;
            img {
                display: block;
                width: 120px;
                height: auto;
            }
        }
    }
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: calc(11 / 13 * 100%);
        height: inherit;
    }
    img#billie {
        position: absolute;
        z-index: 1;
        left: calc((1 - (11 / 13)) * -100% * 2.5);
        top: 100%;
        width: 453px;
        height: auto;
        transform: translateY(-100%) rotate(43.5deg);
    }
}
</style>
