<script setup>
import { version } from "../../package.json";
</script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <div
            class="nes-container is-rounded font-mono w-80 h-64 border-2 border-black rounded-lg flex flex-col justify-center items-center"
        >
            <h1 class="font-bold text-xl">Kool Herc</h1>
            <code>{{ version }}</code>
            <code class="text-xs">Biro - 2022</code>
        </div>
    </div>
</template>
