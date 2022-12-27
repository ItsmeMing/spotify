<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Song from "./Song.vue";
</script>

<template>
    <section class="profile">
        <h1>Profile</h1>
        <img src="../assets/images/profile-image.png" />
        <p class="email">Soroushnorozyui@gmail.com</p>
        <p class="name">Soroushnrz</p>
        <div class="social">
            <div class="social__item">
                <h2>778</h2>
                <p>Followers</p>
            </div>
            <div class="social__item">
                <h2>243</h2>
                <p>Following</p>
            </div>
        </div>
    </section>
    <h1 class="playlist__heading">PUBLIC PLAYLISTS</h1>
    <ul class="playlist">
        <li class="playlist__item" v-for="n in 10" :key="n">
            <Song>
                <template v-slot:left-btn>
                    <img
                        src="../assets/images/billie-eilish-3.png"
                        :style="{
                            width: '58px',
                            height: '56px',
                            objectFit: 'cover',
                            borderRadius: '14px',
                        }"
                    />
                </template>
                <template v-slot:right-btn>
                    <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                </template>
            </Song>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.profile {
    text-align: center;
    width: 100vw;
    margin-left: calc((100vw - 100%) * -0.5);
    background-color: var(--gray-dark);
    border-radius: 0 0 66px 66px;
    h1 {
        font-weight: 700;
        font-size: 17px;
        line-height: 22.95px;
        color: var(--white);
        padding-top: 45px;
        margin-bottom: 20px;
    }
    img {
        width: 96px;
        height: auto;
        border-radius: 100%;
    }
    .email {
        font-weight: 400;
        font-size: 12px;
        line-height: 16.2px;
        color: var(--gray-soft);
        margin: 8px 0 10px 0;
    }
    .name {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: var(--white);
    }
    .social {
        display: flex;
        gap: 120px;
        justify-content: center;
        padding: 20px 0;
        h2,
        p {
            color: var(--white);
        }
        h2 {
            font-weight: 700;
            font-size: 20px;
            line-height: 27px;
        }
        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 18.9px;
        }
    }
}
.playlist__heading {
    font-weight: 700;
    font-size: 15px;
    line-height: 20.25px;
    color: var(--white);
    margin: 20px auto;
}
.playlist {
    height: calc(100vh - 428px - 75px);
    overflow: auto;
    .playlist__item {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
