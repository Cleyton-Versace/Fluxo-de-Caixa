<template>
    <div class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
        <div class="flex flex-wrap justify-around items-center">
        <div class="sm:w-lg bg-black/5 p-10 rounded">
            <h2 class="text-center text-2xl mb-2">{{ sign?'SignUp':'SignOn' }}</h2>
            <form v-if="sign" @submit.prevent="" class="flex flex-col items-center justify-center space-y-2">
                <div class="flex flex-wrap justify-around">
                    <label for="nome">Nome:</label>
                    <input type="text" class="inp-primary">
                </div>
                <div class="flex flex-wrap justify-around">
                    <label for="email">Email:</label>
                    <input type="email" class="inp-primary">
                </div>
                <div class="flex flex-wrap justify-around">
                    <label for="senha">Senha:</label>
                    <input type="text" class="inp-primary">
                </div>
                <button class="btn-primary">Cadastrar</button>
            </form>
            <form v-else @submit.prevent="" class="flex flex-col items-center justify-center space-y-2">
                <div class="flex flex-wrap justify-around">
                    <label for="nome">Nome:</label>
                    <input type="text" class="inp-primary">
                </div>
                <div class="flex flex-wrap justify-around">
                    <label for="email">Email:</label>
                    <input type="email" class="inp-primary">
                </div>
                <button class="btn-primary">Entrar</button>
            </form>
            <p class="text-center text-red-600" style="font-size: 14px;" @click="sign=!sign">{{ sign?'Já tens uma conta?':'Ainda não tenho conta!' }}</p>
        </div>
    </div>
    </div>
    
</template>
<script setup>
    import { ref } from 'vue';
    const sign=ref(false)
</script>