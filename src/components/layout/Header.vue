<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {ref, computed} from "vue";
import GoBackBtn from "../header-btns/GoBackBtn.vue";
import SearchBtn from "../header-btns/SearchBtn.vue";
import Logo from "../header-btns/Logo.vue";

const props = defineProps(["leftBtn", "centerBtn", "displayOptionsBtn"]);

const leftBtnObj = ref({
    goBackBtn: GoBackBtn,
    searchBtn: SearchBtn,
});

const centerContentObj = ref({
    logo: Logo,
});

const leftBtnContent = computed(() => leftBtnObj.value[props.leftBtn]);
const centerBtnContent = computed(
    () => centerContentObj.value[props.centerBtn],
);
</script>

<template>
    <header id="header">
        <div>
            <leftBtnContent />
        </div>
        <div>
            <centerBtnContent />
        </div>
        <div>
            <FontAwesomeIcon
                icon="fa-solid fa-ellipsis-vertical"
                v-if="displayOptionsBtn"
            />
        </div>
    </header>
</template>

<style lang="scss">
#header {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px !important;
    div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        &:first-child > * {
            margin-right: auto;
        }
        &:last-child > * {
            margin-left: auto;
        }
        svg {
            display: block;
            font-size: 20px;
            color: var(--white);
        }
    }
}
</style>
