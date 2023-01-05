<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {inject} from "vue";

const props = defineProps(["track", "playlist"]);
const theme = inject("theme");
const trackDuration = () => {
    if (props.track !== undefined)
        return (
            (Math.floor(props.track?.duration_ms / 1000 / 60) << 0) +
            ":" +
            (Math.floor(props.track?.duration_ms / 1000) % 60)
        );
    else if (props.playlist !== undefined)
        return props.playlist.tracks.total + " song(s)";
    else return undefined;
};
</script>

<template>
    <div class="song">
        <div class="song__item">
            <slot name="left-btn"></slot>
            <div>
                <h1 :class="`song__name ${theme.className}`">
                    {{ track?.name || playlist?.name }}
                </h1>
                <p :class="`song__artist ${theme.className}`" v-if="track">
                    {{ track?.artists[0].name }}
                </p>
            </div>
        </div>
        <div class="song__item">
            <p :class="`song__duration ${theme.className}`">
                {{ trackDuration() }}
            </p>
            <slot name="right-btn"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.song {
    display: flex;
    justify-content: space-between;
    height: auto;
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: calc(100% - 34px - 25px);
            height: 100%;
            text-align: left;
            .song__name {
                font-weight: 700;
                font-size: 20px;
                line-height: normal;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                scrollbar-width: none;
            }
            ::-webkit-scrollbar {
                display: none;
            }
            .song__artist {
                font-weight: 400;
                font-size: 12px;
                line-height: 16.2px;
                margin-top: 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                scrollbar-width: none;
            }
        }
    }
}
</style>
