<script setup>
import Logo from "@/components/AppLogo.vue";
const routes = ["file", "song", "sample", "settings"];
</script>

<template>
    <header
        class="w-full fixed bottom-0 bg-gray-100 h-12 flex items-center px-2"
    >
        <logo class="flex-grow"></logo>
        <ul class="flex gap-4 text-sm capitalize">
            <li v-for="item in routes" :key="item">{{ item }}</li>
        </ul>
    </header>
</template>
