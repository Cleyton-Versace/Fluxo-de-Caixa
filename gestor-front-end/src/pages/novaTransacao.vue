<template>
  <DefaultLayout>
    <div class="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 class="text-2xl font-bold mb-4 text-center">Nova Transação</h2>

      <form @submit.prevent="enviarTransacao" class="space-y-4">
        <div>
          <label class="block font-semibold mb-1">Valor (Kz)</label>
          <input
            v-model.number="valor"
            type="number"
            min="0"
            class="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label class="block font-semibold mb-1">Descrição</label>
          <input
            v-model="descricao"
            type="text"
            class="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label class="block font-semibold mb-1">Tipo</label>
          <select
            v-model="tipo"
            class="w-full border rounded px-4 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Salvar
          </button>
        </div>

        <p v-if="mensagem" class="text-center text-red-500 mt-2">
          {{ mensagem }}
        </p>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue"
import { criarTransacao } from "../services/api"

export default {
  name: "NovaTransacao",
  components: { DefaultLayout },
  data() {
    return {
      valor: 0,
      descricao: "",
      tipo: "",
      mensagem: "",
    }
  },
  methods: {
    async enviarTransacao() {
      const idUser = localStorage.getItem("idUsuario")

      if (!idUser) {
        this.mensagem = "Usuário não identificado, faça login novamente."
        this.$router.push("/")
        return
      }

      if (this.valor <= 0 || this.descricao.length < 4 || !this.tipo) {
        this.mensagem =
          "Preencha corretamente todos os campos para criar a transação."
        return
      }

      try {
        const resposta = await criarTransacao(
          this.valor,
          this.descricao,
          this.tipo,
          parseInt(idUser)
        )

        if (resposta.mensagem) {
          this.$router.push("/dashboard")
        } else {
          this.mensagem = resposta.Erro || "Erro ao criar transação"
        }
      } catch (erro) {
        this.mensagem = "Erro ao conectar com o servidor."
        console.error(erro)
      }
    },
  },
}
</script>