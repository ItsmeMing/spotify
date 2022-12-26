<script setup>
import RootComponent from "../components/layout/RootComponent.vue";
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import Content from "../components/layout/Content.vue";
import NewSong from "../components/NewSong.vue";
import PlayListSong from "../components/PlayListSong.vue";
</script>

<template>
    <RootComponent backgroundColor="#1C1B1B">
        <Header
            leftBtn="searchBtn"
            centerBtn="logo"
            :displayOptionsBtn="true"
        ></Header>
        <Content>
            <section class="new-album">
                <div>
                    <h4>New Album</h4>
                    <p>Happier Than Ever</p>
                    <h3>Billie Eilish</h3>
                </div>
                <img src="../assets/images/billie-eilish-2.png" />
            </section>
            <nav class="menu">
                <ul>
                    <li class="menu__item"><p class="selected">News</p></li>
                    <li class="menu__item"><p>Video</p></li>
                    <li class="menu__item"><p>Artists</p></li>
                    <li class="menu__item"><p>Podcasts</p></li>
                </ul>
            </nav>
            <ul class="product-list">
                <li class="product-item" v-for="n in 10" :key="n">
                    <NewSong />
                </li>
            </ul>
            <div class="playlist-heading">
                <h1>Playlist</h1>
                <p>See more</p>
            </div>
            <ul class="playlist">
                <li class="playlist__item" v-for="n in 10" :key="n">
                    <PlayListSong />
                </li>
            </ul>
        </Content>
        <Footer />
    </RootComponent>
</template>

<style scoped lang="scss">
.new-album {
    position: relative;
    z-index: 3;
    margin-top: 30px;
    background-color: var(--green);
    border-radius: 30px;
    div {
        width: calc(50% - 40px);
        padding: 15px 20px;
        > * {
            font-weight: 700;
            color: var(--white);
        }
        h4 {
            font-size: 10px;
        }
        p {
            font-size: 19px;
            line-height: 25.65px;
            margin: 7.5px 0;
        }
        h3 {
            font-size: 13px;
        }
    }
    img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 325px;
        height: auto;
    }
}
.menu {
    ul {
        display: flex;
        justify-content: space-between;
        margin: 40px 0 30px 0;
        .menu__item {
            p {
                position: relative;
                font-weight: 700;
                font-size: 20px;
                color: var(--white);
                width: fit-content;
                cursor: pointer;
                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    top: 120%;
                    left: 50%;
                    width: 0;
                    height: 3px;
                    background-color: var(--green);
                    transition: linear 0.25s;
                }
                &::before {
                    border-bottom-right-radius: 3.5px;
                }
                &::after {
                    border-bottom-left-radius: 3.5px;

                    transform: translateX(-100%);
                }
            }
            p.selected {
                &::before,
                &::after {
                    width: 25%;
                }
            }
        }
    }
}
.product-list {
    display: flex;
    gap: 15px;
    overflow-y: auto;
}
.playlist-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    > * {
        color: var(--white);
    }
    h1 {
        font-weight: 700;
        font-size: 20px;
    }
    p {
        font-weight: 400;
        font-size: 12px;
    }
}
.playlist {
    margin: 25px -20px 30px 0;
    padding-right: 20px;
    height: 105px;
    overflow: auto;
    .playlist__item {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
