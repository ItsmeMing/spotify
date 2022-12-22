<script setup>
import RootComponent from "./RootComponent.vue";
import Button from "./Button.vue";

defineProps(["imageUrl"]);
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
                <slot></slot>
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

    > * {
        width: calc(11 / 13 * 100%);
        margin: 0 auto;
    }
    .header {
        position: relative;
        align-items: center;
        margin-top: 40px;
        button {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
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
        text-align: center;
        width: calc(11 / 13 * 100%);
        margin: 0 auto 70px auto;
    }
}
</style>
