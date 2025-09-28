<template>
    <div class="w-full p-4 sm:w-lg flex flex-col items-center bg-black/15 rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute ">
        <form @submit.prevent="" class="flex flex-wrap items-center ">
            <div class="flex flex-col space-y-3.5 items-center">
                <select name="Tipo"  class="text-black place-content-end w-28 bg-cyan-800 p-2 rounded" placeholder="Tipo" required id="">
                    <option value="saida">Saida</option>
                    <option value="entrada">Entrada</option>
                </select>
                <div class="flex flex-wrap justify-around space-x-3.5 items-center">
                    <input type="text" class="inp-primary" required placeholder="Valor do montante">
                    <input type="date" class="inp-primary"  >
                </div>
                <textarea class="text-black border-2 resize-none  rounded-2xl border-black" cols="30" required maxlength="155" rows="5">
                </textarea>
                <button type="submit" class="btn-primary">Confirmar</button>
            </div>

        </form>
    </div>
</template>