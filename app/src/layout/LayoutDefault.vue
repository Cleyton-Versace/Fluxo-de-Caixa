<template>
    <div class="min-h-screen flex flex-col">
        <header class="p-2 border-b-2 border-b-black/30 flex flex-wrap justify-between">
            <h1 class="font-bold text-2xl">PDV - X</h1>
            <div>
                <button class="text-xs font-bold p-2 bg-blue-500 rounded" @click="entrar">Entrar</button>
            </div>
        </header>
        <main class="m-2 flex flex-col flex-1">
            <router-view></router-view>
        </main>
        <footer class="border-t-2 border-t-black/50">
            <p>&copy;Cleyton Versace</p>
        </footer>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter()
const entrar=()=>{
    router.push("/default/entrar")
}
    onMounted(()=>{
        router.push("/default/home")
    })

</script>