<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

defineProps(["contentId", "className"])
</script>

<template>
    <div :id="contentId" :class="className">
        <slot></slot>
    </div>
</template>

<style lang="scss">
#content {
   width: 100%;
   text-align: center;
   margin: 0 auto;
}
</style>
