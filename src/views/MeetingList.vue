<script setup>
import { inject } from 'vue'
import HeaderCoponent from '../components/HeaderComponent.vue'
import MeetingListComponent from '@/components/MeetingListComponent.vue'

const allData = inject("allData")
</script>
<template>
    <HeaderCoponent></HeaderCoponent>
    <MeetingListComponent
        :all-data="allData"
    ></MeetingListComponent>
</template>
