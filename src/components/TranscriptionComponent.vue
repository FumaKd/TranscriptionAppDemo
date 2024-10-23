<script setup>
import TranscriptControllerComponent from "./TranscriptControllerComponent.vue"
import MemoManagementControllerComponent from "./MemoManagementControllerComponent.vue"
import { useTranscription } from "@/transcription"
const {recognition, transcriptDisplay, startBtnPressed, stopBtnPressed} = useTranscription()
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
                    @pressedStartButton="startBtnPressed"
                    @pressedStopButton="stopBtnPressed"
                ></TranscriptControllerComponent>
                <MemoManagementControllerComponent></MemoManagementControllerComponent>
                <v-btn @click="" class="mr-6" prepend-icon="mdi-content-save-all">保存</v-btn>
                <v-btn @click="" prepend-icon="mdi-trash-can">削除</v-btn>
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