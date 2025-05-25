import { createRouter, createWebHistory } from 'vue-router'
import QuestionForm from '../views/QuestionForm.vue'

const routes = [
  {
    path: '/',
    name: 'Question',
    component: QuestionForm
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
