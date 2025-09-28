import { createRouter, createWebHistory } from 'vue-router'
const routes=[
  {
    path:"/default/home",
    component:()=>import ("../views/default/home.vue"),
    name:"DefaultHome"
  }
  ,{
    path:"/default/entrar",
    component:()=>import ("../views/default/entrar.vue"),
    name:"DefaultEntrar"
  },
  {
    path:"/home",
    component:()=>import("../views/main/home.vue"),
    name:"Home"
  },
  {
    path:"/adicionar",
    component:()=>import ("../views/main/adicionar.vue"),
    name:"Adicionar"
  },
  {
    path:"/definicoes",
    component:()=>import("../views/main/cog.vue"),
    name:"Definicoes"
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
