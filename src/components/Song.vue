<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject} from "vue";

const props = defineProps(["track"]);
const theme = inject("theme");
const duration = `${Math.floor(props.track?.duration_ms / 1000 / 60) << 0}:${
    Math.floor(props.track?.duration_ms / 1000) % 60
}`;
</script>

<template>
    <div class="song">
        <div class="song__item">
            <slot name="left-btn"></slot>
            <div>
                <h1 :class="`song__name ${theme.className}`">
                    {{ track?.name }}
                </h1>
                <p :class="`song__artist ${theme.className}`">
                    {{ track?.artists[0].name }}
                </p>
            </div>
        </div>
        <div class="song__item">
            <p :class="`song__duration ${theme.className}`">
                {{ duration }}
            </p>
            <slot name="right-btn"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.song {
    display: flex;
    justify-content: space-between;
    .song__item {
        display: flex;
        align-items: center;
        &:first-child {
            gap: 25px;
            width: 50%;
        }

        &:last-child {
            gap: 50px;
        }
        #heart {
            width: 17px;
            height: auto;
        }
        .song__duration {
            font-weight: 400;
            font-size: 15px;
        }
        div {
            width: calc(100% - 34px - 25px);
            text-align: left;
            .song__name {
                font-weight: 700;
                font-size: 20px;
                line-height: 21.6px;
                margin-bottom: 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .song__artist {
                font-weight: 400;
                font-size: 12px;
                line-height: 16.2px;
            }
        }
    }
}
</style>
