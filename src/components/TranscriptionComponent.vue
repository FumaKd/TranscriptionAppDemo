<script setup>
import { ref } from "vue"
import TranscriptControllerComponent from "./TranscriptControllerComponent.vue"
import MemoManagementControllerComponent from "./MemoManagementControllerComponent.vue"
import { useTranscription } from "@/transcription"

const {recognition, transcriptDisplay, startBtnPressed, stopBtnPressed} = useTranscription()
const isProgressSpeechRecognition = ref(false)

function startRecognition() {
    isProgressSpeechRecognition.value = true
    startBtnPressed()
}
function stopRecognition() {
    isProgressSpeechRecognition.value = false
    stopBtnPressed()
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col align-self="end">
                タイトル
                <v-text-field label="タイトル" class="mr-6"></v-text-field>
            </v-col>
            <v-col align-self="end" class="pb-9">
                <TranscriptControllerComponent
                    :speechRecognitionProgressFlag="isProgressSpeechRecognition"
                    @pressedStartButton="startRecognition"
                    @pressedStopButton="stopRecognition"
                ></TranscriptControllerComponent>
                <MemoManagementControllerComponent
                    :speechRecognitionProgressFlag="isProgressSpeechRecognition"
                    @pressedSaveButton="console.log('save')"
                    @pressedDeleteButton="console.log('delete')"
                ></MemoManagementControllerComponent>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                議事内容
                <v-textarea label="議事録" :model-value="transcriptDisplay"></v-textarea>
            </v-col>  
        </v-row>
    </v-container>
</template>