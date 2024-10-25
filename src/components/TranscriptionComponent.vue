<script setup>
import { ref } from "vue"
import TranscriptControllerComponent from "./TranscriptControllerComponent.vue"
import MemoManagementControllerComponent from "./MemoManagementControllerComponent.vue"
import { useTranscription } from "@/transcription"

const props = defineProps(["defaultData"])
const emits = defineEmits(["doCreate", "doDelete", "doUpdate"])

const titleInputed = ref("")
const {transcriptDisplay, startBtnPressed, stopBtnPressed} = useTranscription()
const isProgressSpeechRecognition = ref(false)
// Meeting Detailの場合
if (props.defaultData) {
    titleInputed.value = props.defaultData.title
    transcriptDisplay.value = props.defaultData.document
}

function startRecognition() {
    isProgressSpeechRecognition.value = true
    startBtnPressed()
}
function stopRecognition() {
    isProgressSpeechRecognition.value = false
    stopBtnPressed()
}
function saveTranscription() {
    if (props.defaultData) {  // 更新
        emits("doUpdate", {id: props.defaultData.id, title: titleInputed.value, document: transcriptDisplay.value})
    } else {  // 新規作成
        emits("doCreate", {title: titleInputed.value, document: transcriptDisplay.value})
    }
}
function deleteTranscription() {
    if (props.defaultData) {
        emits("doDelete", props.defaultData.id)
    } else {
        emits("doDelete", false)
    }
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col align-self="end">
                タイトル
                <v-text-field v-model="titleInputed" label="タイトル" class="mr-6"></v-text-field>
            </v-col>
            <v-col align-self="end" class="pb-9">
                <TranscriptControllerComponent
                    :speechRecognitionProgressFlag="isProgressSpeechRecognition"
                    @pressedStartButton="startRecognition"
                    @pressedStopButton="stopRecognition"
                ></TranscriptControllerComponent>
                <MemoManagementControllerComponent
                    :speechRecognitionProgressFlag="isProgressSpeechRecognition"
                    @pressedSaveButton="saveTranscription"
                    @pressedDeleteButton="deleteTranscription"
                ></MemoManagementControllerComponent>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                議事内容
                <v-textarea
                    label="議事録"
                    v-model="transcriptDisplay"
                    :model-value="transcriptDisplay"
                ></v-textarea>
            </v-col>
        </v-row>
    </v-container>
</template>