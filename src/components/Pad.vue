<script setup lang="ts">
import { defineProps } from "vue";
interface PadOption {
    options: {
        sound: string;
        name: string;
        key?: string;
        volume: number;
        loop?: boolean;
        note?: string;
    };
}
const props = defineProps({
    options: { type: Object, default: () => ({} as PadOption) },
});
const audio = new Audio(props.options.sound);
const playSound = () => {
    audio.play();
    pressed = true;
};
const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
    pressed = false;
};
let pressed = false;
window.addEventListener("keydown", (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (key == props.options.key) {
        if (!pressed) {
            playSound();
        }
    }
    // playSound(sound);
});
window.addEventListener("keyup", (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (key == props.options.key) {
        stopSound();
        console.log(`Hai premuto ${key} e suona ${props.options.sound}`);
    }
    // playSound(sound);
});
</script>
<template>
    <button class="pad" @mousedown="playSound" @mouseup="stopSound">
        {{ options.name }}
    </button>
</template>
<style lang="postcss">
.pad {
    @apply focus:outline-none w-full aspect-square border-4 border-black rounded-md;
    box-shadow: -4px 4px 1px rgba(0, 0, 0, 1);
}
.active {
    @apply bg-orange-500;
}
</style>
