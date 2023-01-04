<script setup>
import {ref, computed, inject, onBeforeMount} from "vue";
import {useDataStore} from "../stores/data";
import PlayBtn from "./header-btns/PlayBtn.vue";
import NewSong from "./NewSong.vue";
import Song from "./Song.vue";

const theme = inject("theme");
const dataStore = useDataStore();
const info = ref();
const albums = ref();
const topTracks = ref();
const textColor = computed(() => theme.value.className);
const contentHeight = window.innerHeight - 75;

onBeforeMount(() => {
    info.value = dataStore.getArtistsInfo;
    albums.value = dataStore.getArtistsAlbums;
    topTracks.value = dataStore.getArtistsTopTracks;
    console.log(topTracks.value.tracks);
});
</script>

<template>
    <div id="content" :style="{height: contentHeight + 'px'}">
        <figure class="artist-img">
            <img :src="info.images[0].url" />
        </figure>
        <h1 :class="textColor">{{ info.name }}</h1>
        <h2 :class="`songs-count ${textColor}`">
            Followers: {{ info.followers.total }}, Popularity:
            {{ info.popularity }}
        </h2>
        <p class="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            adipiscing vestibulum orci enim, nascetur vitae
        </p>
        <section class="albums-wrapper">
            <h2 :class="`album__header ${textColor}`">Albums</h2>
            <ul class="product-list">
                <li
                    class="product-item"
                    v-for="(album, key) in albums.items"
                    :key="key"
                >
                    <NewSong :album="album" />
                </li>
            </ul>
        </section>
        <section class="songs-wrapper">
            <h2 :class="`song__header ${textColor}`">Songs</h2>
            <ul class="playlist">
                <li class="playlist__item" v-for="(track, key) in topTracks.tracks" :key="key">
                    <Song :track="track">
                        <template v-slot:left-btn>
                            <PlayBtn
                                :width="34"
                                :height="34"
                                imgClass="img-big"
                            />
                        </template>
                        <template v-slot:right-btn>
                            <svg
                                width="17.5"
                                height="15.75"
                                viewBox="0 0 86 78"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M78.3875 6.7424C73.0772 1.32705 67.1656 -0.348243 61.614 0.0581718C56.2125 0.453597 51.3481 2.79668 47.7953 5.05039C44.9935 6.82768 41.0055 6.82768 38.2037 5.0504C34.6508 2.7967 29.7865 0.45365 24.385 0.0582333C18.8334 -0.348174 12.9219 1.32711 7.61165 6.74241C1.34254 13.1356 -0.624327 21.0277 0.165488 29.0107C0.9462 36.9018 4.40752 44.9235 9.02396 52.0314C13.6527 59.1583 19.5655 65.557 25.4974 70.2032C31.2988 74.7472 37.6109 78 42.9996 78C48.3883 78 54.7005 74.7472 60.5018 70.2032C66.4337 65.557 72.3464 59.1583 76.9752 52.0314C81.5916 44.9235 85.0529 36.9018 85.8336 29.0107C86.6234 21.0277 84.6565 13.1355 78.3875 6.7424ZM51.0092 10.117C54.151 8.12402 58.0398 6.33588 62.0521 6.04216C65.9142 5.75942 70.0769 6.83704 74.1035 10.9433C78.9164 15.8514 80.5098 21.8796 79.8628 28.42C79.2066 35.0524 76.2338 42.1573 71.9433 48.7633C67.6652 55.3504 62.1983 61.253 56.8021 65.4797C51.2754 69.8085 46.3112 72 42.9996 72C39.688 72 34.7238 69.8085 29.1971 65.4797C23.8009 61.253 18.334 55.3504 14.0558 48.7633C9.76534 42.1573 6.79252 35.0524 6.13634 28.42C5.48925 21.8796 7.08273 15.8514 11.8956 10.9433C15.9222 6.83711 20.0848 5.75949 23.9469 6.04222C27.9592 6.33594 31.8479 8.12405 34.9897 10.117C39.7534 13.1388 46.2455 13.1388 51.0092 10.117Z"
                                    :fill="theme.secondBgColor"
                                />
                            </svg>
                        </template>
                    </Song>
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped lang="scss">
#content {
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
