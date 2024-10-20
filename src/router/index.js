import { createRouter, createWebHistory } from 'vue-router'
import MeetingDetail from '@/views/MeetingDetail.vue'
import MeetingList from '../views/MeetingList.vue'
import SpeechRecognition from "../views/SpeechRecognition.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: MeetingList
  },
  {
    path: '/detail/:MeetingId',
    name: 'meetingDetail',
    component: MeetingDetail
  },
  {
    path: '/transcription',
    name: 'transcription',
    component: SpeechRecognition
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
