<script setup>
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
    if (navigator.requestMIDIAccess) {
        navigator
            .requestMIDIAccess({
                sysex: false, // this defaults to 'false' and we won't be covering sysex in this article.
            })
            .then(onMIDISuccess, onMIDIFailure);
    } else {
        alert("No MIDI support in your browser.");
    }
});
const onMIDISuccess = (midiAccess) => {
    console.log("MIDI ready!", midiAccess);
    const midi = midiAccess; // this is our raw MIDI data, inputs, outputs, and sysex status

    var inputs = midi.inputs.values();
    // loop over all available inputs and listen for any MIDI input
    for (
        var input = inputs.next();
        input && !input.done;
        input = inputs.next()
    ) {
        // each time there is a midi message call the onMIDIMessage function
        input.value.onmidimessage = onMIDIMessage;
    }
};
const onMIDIFailure = () => {
    console.log(
        "No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " +
            "to provide WebMIDI API support in this application."
    );
};
const onMIDIMessage = (message) => {
    const data = message.data; // this gives us our [command/channel, note, velocity] data.
    console.log("MIDI data", data); // MIDI data [144, 63, 73]
};
</script>

<template>
    <router-view></router-view>
</template>

<style lang="postcss">
body {
    @apply font-body;
}
code {
    @apply font-mono;
}
</style>
