<script setup>
import { ref } from "vue"
import HeaderCoponent from '../components/HeaderComponent.vue'

const MeetingData = ref([
    {id: 1, title: "data1", date: "2024/10/20/18:17", docment: "text aiueokakikukekosasisusesotatitutetonaninunenohahihuhehomamimumemoyayuyo"},
    {id: 2, title: "data2", date: "2024/10/20/18:17", docment: "text aiueokakikukekosasisusesotatitutetonaninunenohahihuhehomamimumemoyayuyo"},
    {id: 3, title: "data3", date: "2024/10/20/18:17", docment: "text aiueokakikukekosasisusesotatitutetonaninunenohahihuhehomamimumemoyayuyo"},
    
])
</script>
<template>
    <HeaderCoponent></HeaderCoponent>

    <h1>議事録一覧</h1>
    <h2>サブタイトル</h2>
    <div v-for="data of MeetingData" :key="data.id">
        <h3>{{ data.title }}</h3>
        <h4>{{ data.date }}</h4>
    </div>

</template>
