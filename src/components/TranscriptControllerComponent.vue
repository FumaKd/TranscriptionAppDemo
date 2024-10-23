<script setup>
const emit = defineEmits(["pressedStartButton", "pressedStopButton"])
</script>
<template>
    <v-btn @click="emit('pressedStartButton')" class="mr-6" prepend-icon="mdi-play-circle">開始</v-btn>
    <v-btn @click="emit('pressedStopButton')" class="mr-6" prepend-icon="mdi-stop-circle">停止</v-btn>
</template>