<script setup>
import { provide } from 'vue'
import { getAllData } from './storage'

const allData = getAllData()
provide("allData", allData)
</script>

<template>
    <v-app>
        <v-main>
                <router-view/>
        </v-main>
    </v-app>
</template>
