<script setup>
import {computed, inject} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import PlayBtn from "./header-btns/PlayBtn.vue";
import NewSong from "./NewSong.vue";
import Song from "./Song.vue";

const theme = inject("theme");
const textColor = computed(() => theme.value.className);
const contentHeight = window.innerHeight - 75;
</script>

<template>
    <div id="wrapper" :style="{height: contentHeight + 'px'}">
        <figure class="artist-img">
            <img src="../assets/images/billie-eilish-4.png" />
        </figure>
        <h1 :class="textColor">Billie Eilish</h1>
        <h2 :class="`songs-count ${textColor}`">2 album , 67 track</h2>
        <p class="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            adipiscing vestibulum orci enim, nascetur vitae
        </p>
        <section class="albums-wrapper">
            <h2 class="album__header">Albums</h2>
            <ul class="product-list">
                <li class="product-item" v-for="n in 10" :key="n">
                    <NewSong />
                </li>
            </ul>
        </section>
        <section class="songs-wrapper">
            <h2 :class="`song__header ${textColor}`">Albums</h2>
            <ul class="playlist">
                <li class="playlist__item" v-for="n in 10" :key="n">
                    <Song>
                        <template v-slot:left-btn>
                            <PlayBtn
                                :width="34"
                                :height="34"
                                imgClass="img-big"
                            />
                        </template>
                        <template v-slot:right-btn>
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                        </template>
                    </Song>
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped lang="scss">
#wrapper {
    overflow: auto;
    width: 100%;
    > *:not(.artist-img) {
        width: calc(11 / 13 * 100%);
        margin: 0 auto;
    }
    .artist-img {
        width: 100%;
        height: 240px;
        border-radius: 0 0 69px 69px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    h1,
    .songs-count,
    p {
        text-align: center;
        width: calc(100vw - 138px);
        margin: 0 auto;
    }
    h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        margin: 12px auto 6px auto !important;
    }

    .songs-count {
        font-weight: 400;
        font-size: 13px;
        font-weight: 17.55px;
        color: var(--gray-soft);
        margin-bottom: 10px;
    }

    .lorem {
        font-weight: 400;
        font-size: 12px;
        color: var(--gray-soft);
    }

    .albums-wrapper {
        margin-top: 10px;
        .album__header {
            text-align: left;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
        }
        .product-list {
            display: flex;
            gap: 15px;
            margin-top: 20px;
            overflow-y: auto;
        }
    }

    .songs-wrapper {
        margin-top: 10px;
        .song__header {
            text-align: left;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
        }

        .playlist {
            margin: 20px -20px 20px 0;
            padding-right: 20px;
            height: 20vh;
            overflow: auto;
            .playlist__item {
                margin-bottom: 20px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
