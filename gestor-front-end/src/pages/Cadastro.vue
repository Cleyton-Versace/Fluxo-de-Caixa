<template>
  <DefaultLayout>
    <div class="max-w-md mx-auto mt-20 bg-black/70 p-8 rounded shadow">
      <h2 class="text-2xl font-bold text-center mb-6">Criar Conta</h2>
      <form @submit.prevent="criarConta" class="space-y-4">
        <div>
          <label class="block mb-1">Nome</label>
          <input
            type="text"
            v-model="nome"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>
        <div>
          <label class="block mb-1">Email</label>
          <input
            type="email"
            v-model="email"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>
        <div>
          <label class="block mb-1">Senha</label>
          <input
            type="password"
            v-model="senha"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Criar Conta
        </button>
        <p class="text-sm text-center mt-4">
          Já tens conta?
          <router-link to="/" class="text-blue-600 hover:underline"
            >Fazer Login</router-link
          >
        </p>
        <p v-if="mensagem" class="text-red-600 text-center mt-2">
          {{ mensagem }}
        </p>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue"
import { cadastrarUsuario } from "../services/api"

export default {
  name: "Cadastro",
  components: {
    DefaultLayout,
  },
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      mensagem: "",
    }
  },
  methods: {
    async criarConta() {
      if (!this.nome || !this.email || !this.senha) {
        this.mensagem = "Preencha todos os campos"
        return
      }

      try {
        const resposta = await cadastrarUsuario(
          this.nome,
          this.email,
          this.senha
        )

        if (resposta.mensagem) {
          this.$router.push("/")
        } else {
          this.mensagem = resposta.Erro || resposta.erro || "Erro desconhecido"
        }
      } catch (erro) {
        this.mensagem = "Erro ao criar conta. Tente novamente."
      }
    },
  },
}
</script>