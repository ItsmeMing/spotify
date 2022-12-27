<script setup>
import Button from "../Button.vue";

defineProps(["width", "height", "imgClass"]);
</script>

<template>
    <Button
        :width="width + 'px'"
        :height="height + 'px'"
        className="btn-gray-background"
        borderRadius="100%"
    >
        <img
            src="../../assets/images/play.png"
            :style="{width: width / 2 + 'px', height: height / 2 + 'px'}"
        />
    </Button>
</template>

<style scoped lang="scss">
.img-small {
    height: 14px;
    width: auto;
}
.img-big {
    height: 17px;
    width: auto;
}
</style>
