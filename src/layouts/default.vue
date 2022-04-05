<script setup>
import AppHeader from "@/components/AppHeader.vue";
import { onMounted } from "vue";
onMounted(() => {
    console.log("MONTOOOOOO LAYOUT");
});
</script>
<template>
    <app-header />

    <div class="custom-fit">
        <router-view></router-view>
    </div>
</template>

<style lang="postcss">
.custom-fit {
    height: calc(100vh - theme("spacing.12"));
    @apply px-2 overflow-y-auto;
}
</style>
