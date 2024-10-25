<script setup>
import { ref, inject } from "vue"
import { useRoute, useRouter } from "vue-router"
import { updateData, deleteData } from "@/storage"
import HeaderComponent from "../components/HeaderComponent.vue"
import TranscriptionComponent from "@/components/TranscriptionComponent.vue"

const router = useRouter()
const route = useRoute()

const allData = inject("allData")
const targetId = route.params.MeetingId
const defaultData = ref(allData.value.filter((item) => item.id == targetId)[0])

function updateFunction(arg) {
    updateData(arg)
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
        :default-data="defaultData"
        @doUpdate="(arg) => updateFunction(arg)"
        @doDelete="(arg) => deleteFunction(arg)"
    ></TranscriptionComponent>
</template>