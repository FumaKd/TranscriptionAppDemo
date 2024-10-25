<script setup>
const props = defineProps(["allData"])
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>議事録一覧</h1>
            </v-col>
            <v-col class="ma-0" align="right" align-self="bottom">
                <v-chip
                    color="blue"
                    @click="$router.push('transcription')"
                >
                    <v-icon icon="mdi-plus"></v-icon>
                    新規作成
                </v-chip>
            </v-col>
            
        </v-row>
        <v-row>
            <h2>サブタイトル</h2>
        </v-row>
        <v-row>
            <v-card
                width="250"
                height="100"
                v-for="data of allData"
                :key="data.id"
                elevation="2"
                class="ma-2"
                @click="$router.push(`/detail/${ data.id }`)"
            >
                <v-card-title>
                    {{ data.title }}
                </v-card-title>
                <v-card-subtitle>
                    {{ data.date }}
                </v-card-subtitle>
            </v-card>
        </v-row> 
    </v-container>
</template>