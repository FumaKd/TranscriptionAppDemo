<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { createData, deleteData } from "@/storage"
import HeaderComponent from "../components/HeaderComponent.vue"
import TranscriptionComponent from "@/components/TranscriptionComponent.vue"

const router = useRouter()

const errorMsg = ref("")

function createFunction(arg) {
    errorMsg.value = createData(arg)
    if (errorMsg.value == "") {
        router.push({name: "home"})
    }
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
        :errorMsg="errorMsg"
    ></TranscriptionComponent>
</template>