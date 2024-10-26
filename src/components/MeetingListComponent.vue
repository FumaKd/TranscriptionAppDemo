<script setup>
const props = defineProps(["allData"])
function getDocumentShortened(doc) {
    let maxLengthTextDisplay = 50
    let documentElements = doc.split("")
    if (documentElements.length >= maxLengthTextDisplay) {
        return documentElements.slice(0, maxLengthTextDisplay).join("") + "..."
    } else {
        return doc
    }
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 class="text-grey-lighten-1">議事録一覧</h1>
            </v-col>
            <v-col class="ma-0" align="right">
                <v-chip
                    color="blue"
                    @click="$router.push('transcription')"
                >
                    <v-icon icon="mdi-plus"></v-icon>
                    新規作成
                </v-chip>
            </v-col>
        </v-row>
        <v-row justify="start" class="ma-1">
            <v-card
                width="300"
                height="150"
                v-for="data of allData"
                :key="data.id"
                color="#BC671D"
                elevation="3"
                class="ma-4"
                @click="$router.push(`/detail/${ data.id }`)"
            >
                <v-card-item>
                    <v-card-title class="text-grey-lighten-2">
                        {{ data.title }}
                    </v-card-title>
                    <v-card-subtitle >
                        最終更新: {{ data.date }}
                    </v-card-subtitle>
                </v-card-item>
                
                <v-card-text class="text-white opacity-70">
                    {{ getDocumentShortened(data.document) }}
                </v-card-text>
            </v-card>
        </v-row> 
    </v-container>
</template>