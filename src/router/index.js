import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
import Task from '@/views/app/Task/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Task',
    component: Task,
    meta: {
      title: 'Task',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router