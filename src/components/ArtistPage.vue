<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import PlayBtn from "./header-btns/PlayBtn.vue";
import NewSong from "./NewSong.vue";
import Song from "./Song.vue";
</script>

<template>
    <figure class="artist-img">
        <img src="../assets/images/billie-eilish-4.png" />
    </figure>
    <h1>Billie Eilish</h1>
    <h2 class="songs-count">2 album , 67 track</h2>
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
        <h2 class="song__header">Albums</h2>
        <ul class="playlist">
            <li class="playlist__item" v-for="n in 10" :key="n">
                <Song>
                    <template v-slot:left-btn>
                        <PlayBtn :width="34" :height="34" imgClass="img-big" />
                    </template>
                    <template v-slot:right-btn>
                        <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                    </template>
                </Song>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.artist-img {
    width: 100vw;
    height: 240px;
    margin-left: calc((100vw - 100%) * -0.5);
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
    color: var(--white);
    margin: 12px auto 6px auto;
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
        color: var(--white);
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
        color: var(--white);
    }

    .playlist {
        margin: 20px -20px 0 0;
        padding-right: 20px;
        height: calc(100vh - 240px - 75px - 53vh);
        overflow: auto;
        .playlist__item {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
