<script setup>
import { ref } from "vue"
import TranscriptControllerComponent from "./TranscriptControllerComponent.vue"
import MemoManagementControllerComponent from "./MemoManagementControllerComponent.vue"
import { useTranscription } from "@/transcription"

const props = defineProps(["defaultData", "errorMsg"])
const emits = defineEmits(["doCreate", "doDelete", "doUpdate"])

const titleInputed = ref("")
const {transcriptDisplay, recognitionFlug, startBtnPressed, stopBtnPressed} = useTranscription()
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
            <v-col align-self="end" class="text-grey-lighten-1">
                タイトル
                <v-text-field v-model="titleInputed" label="タイトル" class="mr-6"></v-text-field>
            </v-col>
            <v-col align-self="end" class="pb-9">
                <v-row>
                    <v-chip
                        prepend-icon="mdi-microphone"
                        variant="outlined"
                        :class="{'text-green': recognitionFlug, 'text-red-accent-3': !recognitionFlug}"
                    >
                        <template v-if="recognitionFlug">認識中</template>
                        <template v-else>認識不可</template>
                    </v-chip>
                </v-row>
                <v-row>
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
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-grey-lighten-1">
                議事内容
                <v-textarea
                    label="議事録"
                    v-model="transcriptDisplay"
                    :model-value="transcriptDisplay"
                    auto-grow
                    rows="10"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row v-show="errorMsg">
            <v-col class="text-red-accent-4">
                <v-icon icon="mdi-alert-circle-outline"></v-icon>
                {{ errorMsg }}
            </v-col>
        </v-row>
    </v-container>
</template>