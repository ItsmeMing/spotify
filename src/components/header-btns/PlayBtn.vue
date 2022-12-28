<script setup>
import {inject} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Button from "../Button.vue";

defineProps(["width", "height", "imgClass"]);

const theme = inject("theme");
</script>

<template>
    <Button
        :width="width + 'px'"
        :height="height + 'px'"
        :className="`btn-gray-background ${theme.className}`"
        borderRadius="100%"
    >
        <FontAwesomeIcon
            icon="fa-solid fa-play"
            :style="{fontSize: width / 2 + 'px', color: theme.playBtnColor}"
        />
    </Button>
</template>

<style scoped lang="scss"></style>
