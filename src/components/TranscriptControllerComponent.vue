<script setup>
const props = defineProps(["speechRecognitionProgressFlag"])
const emit = defineEmits(["pressedStartButton", "pressedStopButton"])
</script>
<template>
    <v-btn
        variant="outlined"
        @click="emit('pressedStartButton')"
        class="mr-6"
        color="#BC671D"
        prepend-icon="mdi-play-circle"
        :disabled="speechRecognitionProgressFlag"
    >
        開始
    </v-btn>
    <v-btn
        variant="outlined"
        @click="emit('pressedStopButton')"
        class="mr-6"
        color="#BC671D"
        prepend-icon="mdi-stop-circle"
        :disabled="!speechRecognitionProgressFlag"
    >
        停止
    </v-btn>
</template>