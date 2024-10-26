<script setup>
const props = defineProps(["speechRecognitionProgressFlag"])
const emit = defineEmits(["pressedSaveButton", "pressedDeleteButton"])
</script>
<template>
    <v-btn
        variant="outlined"
        @click="emit('pressedSaveButton')"
        class="mr-6"
        color="green-accent-4"
        prepend-icon="mdi-content-save-all"
        :disabled="speechRecognitionProgressFlag"
    >
        保存
    </v-btn>
    <v-btn
        variant="outlined"
        @click="emit('pressedDeleteButton')"
        color="red-accent-4"
        prepend-icon="mdi-trash-can"
        :disabled="speechRecognitionProgressFlag"
    >
        削除
    </v-btn>
</template>