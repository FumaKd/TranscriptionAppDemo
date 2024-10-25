<script setup>
const props = defineProps(["speechRecognitionProgressFlag"])
const emit = defineEmits(["pressedSaveButton", "pressedDeleteButton"])
</script>
<template>
    <v-btn
        @click="emit('pressedSaveButton')"
        class="mr-6"
        prepend-icon="mdi-content-save-all"
        :disabled="speechRecognitionProgressFlag"
    >
        保存
    </v-btn>
    <v-btn
        @click="emit('pressedDeleteButton')"
        prepend-icon="mdi-trash-can"
        :disabled="speechRecognitionProgressFlag"
    >
        削除
    </v-btn>
</template>