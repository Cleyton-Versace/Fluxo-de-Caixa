import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Cadastro from "../pages/Cadastro.vue";
import Dashboard from "../pages/Dashboard.vue";
import NovaTransacao from "../pages/novaTransacao.vue";

const routes=[
    {path:'/',component:Login},
    {path:'/novaTransacao',component:NovaTransacao},
    {path:'/cadastro',component:Cadastro},
    {path:'/dashboard',component:Dashboard}
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router