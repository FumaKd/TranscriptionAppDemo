<script setup>
import { useRouter } from "vue-router"
import { createData, deleteData } from "@/storage"
import HeaderComponent from "../components/HeaderComponent.vue"
import TranscriptionComponent from "@/components/TranscriptionComponent.vue"

const router = useRouter()
function createFunction(arg) {
    createData(arg)
    router.push({name: "home"})
}
function deleteFunction(arg) {
    if (arg) deleteData(arg)
    router.push({name: "home"})
}
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <TranscriptionComponent
        @doCreate="(arg) => createFunction(arg)"
        @doDelete="(arg) => deleteFunction(arg)"
    ></TranscriptionComponent>
</template>