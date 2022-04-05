<script setup lang="ts">
import Pad from "@/components/Pad.vue";
interface PadType {
    sound: string;
    name: string;
    key: string;
}
const instr: Array<PadType> = [
    { name: "Snare_2", sound: "Snare_2.wav", key: "1" },
    { name: "Snare_1", sound: "Snare_1.wav", key: "2" },
    { name: "DK4SNR", sound: "DK4SNR.WAV", key: "3" },
    { name: "hat08", sound: "hat08.wav", key: "4" },
    { name: "DK9CLP", sound: "DK9CLP.WAV", key: "q" },
    { name: "hat02", sound: "hat02.wav", key: "w" },
    { name: "kick13", sound: "kick13.wav", key: "e" },
    { name: "hat12", sound: "hat12.wav", key: "r" },
    { name: "kick25", sound: "kick25.wav", key: "a" },
    { name: "hat21", sound: "hat21.wav", key: "s" },
    { name: "kick14", sound: "kick14.wav", key: "d" },
    { name: "DK9SNR", sound: "DK9SNR.WAV", key: "f" },
    { name: "kick05", sound: "kick05.wav", key: "z" },
    { name: "snare16", sound: "snare16.wav", key: "x" },
    { name: "LOOP", sound: "loop.wav", key: "c" },
];
</script>
<template>
    <div class="w-full h-full">
        <div class="grid grid-cols-5">
            <div class=""></div>
            <div class="col-span-3">
                <div class="grid grid-cols-4 gap-4">
                    <Pad
                        v-for="(pad, p) in instr"
                        :key="pad.name"
                        :sound="`/sounds/${pad.sound}`"
                        :keyboard="pad.key.toString()"
                        :name="pad.name"
                        :index="p"
                        :options="{
                            sound: `/sounds/${pad.sound}`,
                            name: pad.name,
                            key: pad.key,
                            volume: 1,
                            loop: false,
                        }"
                    ></Pad>
                </div>
            </div>
        </div>
    </div>
</template>
