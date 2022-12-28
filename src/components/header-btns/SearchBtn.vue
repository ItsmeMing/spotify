<script setup>
import {inject} from "vue";
import Button from "../Button.vue";

const theme = inject("theme");
</script>

<template>
    <Button className="btn-transparent no-effect" borderRadius="100%">
        <svg
            width="25"
            height="25"
            viewBox="0 0 90 90"
            :fill="theme.searchBtnColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0ZM6 39C6 20.7746 20.7746 6 39 6C57.2254 6 72 20.7746 72 39C72 57.2254 57.2254 72 39 72C20.7746 72 6 57.2254 6 39Z"
                :fill="theme.searchBtnColor"
            />
            <path
                d="M73.1216 68.8791C71.95 67.7075 70.0505 67.7075 68.879 68.879C67.7074 70.0506 67.7074 71.9501 68.8789 73.1217L84.8785 89.1215C86.0501 90.293 87.9496 90.2931 89.1211 89.1215C90.2927 87.9499 90.2927 86.0504 89.1212 84.8788L73.1216 68.8791Z"
                :fill="theme.searchBtnColor"
            />
        </svg>
    </Button>
</template>

<style scoped lang="scss"></style>
