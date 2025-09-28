<template>
    <!--Informacoes basicas-->
<div class="flex flex-wrap justify-around items-center">
    <div class="sm:w-50 w-1/2 min-h-20 rounded flex flex-col justify-between items-center bg-red-600">
        <h2>Saída</h2>
    </div>
    <div class="sm:w-50 w-1/2 min-h-20 rounded flex flex-col justify-between items-center bg-emerald-600">
        <h2>Entrada</h2>
    </div>
    <div class="sm:w-100 w-full min-h-20 flex flex-col items-center rounded bg-cyan-900 not-sm:mt-5 p-3">
        <div class="flex w-full flex-wrap justify-between items-center">
            <h2 class="text-black font-bold">Transações</h2>
            <div class="flex flex-wrap space-x-3">
                <img src="../../assets/icon/Arrange-List-Ascending-1--Streamline-Ultimate.png" alt="">
                <img src="../../assets/icon/Arrange-List-Descending-1--Streamline-Ultimate.png" alt="">
            </div>
        </div>
    </div>
</div>
<!--Graficos-->
<div class="w-full rounded-2xl p-3 h-50 bg-white mt-4 shadow-2xl shadow-black">
    <div class="flex flex-wrap justify-between items-center">
        <h2 class="text-black font-bold">Gráfico</h2>
        <div class="flex flex-wrap space-x-3">
            <img src="../../assets/icon/Arrange-List-Ascending-1--Streamline-Ultimate.png" alt="">
            <img src="../../assets/icon/Arrange-List-Descending-1--Streamline-Ultimate.png" alt="">
        </div>
    </div>
    <div class="w-full h-35 bg-slate-600 m-2 rounded">
        <h2 class="text-center">Futuros Gráficos</h2>
    </div>

</div>
<!--Acoes rapidas-->
<div class="w-full flex flex-wrap justify-center space-x-5 mt-8">
    <div class="sm:w-30 cursor-pointer sm:h-30 h-20 w-1/4 rounded-full bg-slate-400 flex flex-col justify-center p-2 items-center">
        <img src="../../assets/icon/Add-Square--Streamline-Ultimate.png" alt="adicionar">
        <h2 class=" text-p">Adicionar</h2>
    </div>
    <div class="sm:w-30 cursor-pointer sm:h-30 h-20 w-1/4 rounded-full bg-slate-400 flex flex-col justify-center p-2 items-center">
        <img src="../../assets/icon/Information-Circle--Streamline-Ultimate.png" alt="">
        <h2 class="text-p">Informação</h2>
    </div>
    <div class="sm:w-30 sm:h-30 h-20 w-1/4 rounded-full cursor-pointer bg-slate-400 flex flex-col justify-center p-2 items-center">
        <img src="../../assets/icon/Cog-3--Streamline-Ultimate.png" alt="">
        <h2 class="text-p">Definições</h2>
    </div>
</div>
</template>

<script>
import {
    reactive,
    ref,
    watch
} from 'vue';
</script>
