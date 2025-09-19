<template>
  <DefaultLayout>
    <div class="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 class="text-2xl font-bold mb-6">Minhas Transações</h2>

      <!-- Mensagem de erro, se houver -->
      <p v-if="mensagem" class="text-red-500">{{ mensagem }}</p>

      <!-- Lista de transações -->
      <ul v-if="transacoes.length" class="space-y-4">
        <li
          v-for="(transacao, index) in transacoes"
          :key="index"
          :class="transacao.tipo === 'entrada' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'"
          class="p-4 bg-gray-50 shadow rounded"
        >
          <div class="flex justify-between items-center">
            <div>
              <p class="font-semibold text-gray-800">{{ transacao.descricao }}</p>
              <p class="text-sm text-gray-500 capitalize">{{ transacao.tipo }}</p>
            </div>
            <div :class="transacao.tipo === 'entrada' ? 'text-green-600' : 'text-red-600'" class="text-lg font-bold">
              {{ formatarValor(transacao.valor) }}
            </div>
          </div>
        </li>
      </ul>

      <p v-else class="text-center text-gray-600">Nenhuma transação encontrada.</p>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue"
import { listarTransacoes } from "../services/api"

export default {
  name: "Dashboard",
  components: {
    DefaultLayout,
  },
  data() {
    return {
      transacoes: [],
      mensagem: "",
    }
  },
  async mounted() {
    const idUsuario = parseInt(localStorage.getItem("idUsuario"))
    if (!idUsuario) {
      this.mensagem = "Usuário não autenticado"
      return
    }

    try {
      const resultado = await listarTransacoes(idUsuario)
      this.transacoes = resultado
    } catch (erro) {
      this.mensagem = erro?.response?.data?.erro || "Erro ao buscar transações"
    }
  },
  methods: {
    formatarValor(valor) {
      return new Intl.NumberFormat("pt-AO", {
        style: "currency",
        currency: "AOA",
      }).format(valor)
    },
  },
}
</script>
