<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
    <div class="song">
        <div class="song__item">
            <slot name="left-btn"></slot>
            <div>
                <h1 class="song__name">Bad Guy</h1>
                <p class="song__artist">Billie Eilish</p>
            </div>
        </div>
        <div class="song__item">
            <p class="song__duration">5:33</p>
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
            color: var(--white);
        }
        div {
            > * {
                color: var(--white);
            }
            .song__name {
                font-weight: 700;
                font-size: 20px;
                line-height: 21.6px;
                margin-bottom: 5px;
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
