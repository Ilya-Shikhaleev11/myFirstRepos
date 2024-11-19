import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '@/views/ToDOList.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"ToDoList",
      component: ToDoList
    },
    {
      path:"/about",
      name:"About",
      component: AboutView
    },
  ],
})

export default router
