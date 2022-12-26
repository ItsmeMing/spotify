<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
    <footer>
        <ul>
            <li class="footer__item">
                <img src="../../assets/images/home.svg" />
            </li>
            <li class="footer__item">
                <img src="../../assets/images/discover.svg" />
            </li>
            <li class="footer__item">
                <img src="../../assets/images/heart.svg" />
            </li>
            <li class="footer__item">
                <img src="../../assets/images/profile.svg" />
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
footer {
    position: absolute;
    bottom: 0;
    left: calc((100vw - 100%) * -0.5);
    width: 100vw;
    background-color: var(--gray-dark);
    ul {
        display: flex;
        .footer__item {
            flex: 0 0 25%;
            padding: 25px 0;
            cursor: pointer;
            img {
                display: block;
                height: 25px;
                width: auto;
                margin: 0 auto;
            }
        }
    }
}
</style>
