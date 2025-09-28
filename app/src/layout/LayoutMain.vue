<template>
    <div class="min-h-screen flex flex-col text-white">
        <header class="fixed w-full bg-black flex flex-wrap justify-between p-2">
            <h1 class="font-bold text-2xl">PDV - X</h1>
            <div class="flex flex-wrap items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-white"></div>
                <div class="sm:hidden w-10 h-6 flex flex-col space-y-1.5">
                    <div class="w-full h-1 bg-purple-700 p-0.5"></div>
                    <div class="w-full h-1 bg-purple-700 p-0.5"></div>
                    <div class="w-full h-1 bg-purple-700 p-0.5"></div>
                </div>
            </div>
            

        </header>
        <aside class="w-40 bg-white hidden sm:block fixed h-full top-14 text-black">
            <div class="flex flex-col items-center justify-around space-y-5.5">
                <div class="w-full hover:bg-slate-100 p-2">
                    <router-link to="/home" class="flex flex-wrap space-x-2.5 font-bold" ><img src="../assets/icon/House-4--Streamline-Ultimate.png" alt=""><h2>Home</h2></router-link>
                </div>
                <div class="w-full hover:bg-slate-100 p-2">
                    <router-link class="flex flex-wrap space-x-2.5 font-bold" to="/adicionar"><img src="../assets/icon/List-Add--Streamline-Ultimate.png" alt=""><h2>Adicionar</h2></router-link>
                </div>
                <div class="w-full hover:bg-slate-100 p-2">
                    <router-link class="flex flex-wrap space-x-2.5 font-bold" to="/definicoes"><img src="../assets/icon/Cog-3--Streamline-Ultimate.png" alt=""><h2>Configurações</h2></router-link>
                </div>
                <div class="w-full hover:bg-slate-100 p-2">
                    <router-link to="" class="flex flex-wrap space-x-2.5 font-bold"><img src="../assets/icon/logout.png" alt=""><h2>Logout</h2></router-link>
                </div>
                <div class="w-full hover:bg-slate-500 p-2"></div>
                
                
                
                
                
            </div>
        </aside>
        <main class="sm:ml-40 mt-14 p-10 flex-1 flex-shrink bg-black/5">
            <router-view></router-view>
        </main>
        <footer class="sm:ml-40 mi-h-12 bg-white/15 border-t-2 border-t-black/20 flex flex-col justify-around text-black">
            <p class="mb-1 border-b-2 border-b-black p-2 text-center">&copy;2025 - Cleyton Versace</p>
            <div class="flex flex-wrap justify-around">

            </div>
        </footer>
    </div>
</template>
<script setup>
    
</script>