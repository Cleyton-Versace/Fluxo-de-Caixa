<template>
    <DefaultLayout>
        <div class="max-w-md mx-auto mt-20 bg-black/75 p-8 rounded shadow">
            <h2 class="text-2xl font-bold text-center mb-6">Acessar Conta</h2>
            <form @submit.prevent="fazerLogin" class="space-y-4">
                <div>
                    <label class="block mb-1">Email</label>
                    <input type="email" v-model="email"
                        class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400" required>
                </div>
                <div>
                    <label class="block mb-1">Senha</label>
                    <input type="password" v-model="senha"
                    class="w-full  px-3 border py-2 rounded-lg focus:outline-none focus:ring  focus:border-blue-400"
                    required>
                </div>
                <div>
                    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
                    <p class="text-sm text-center" mt-4>Ainda nao tens conta? <router-link to="/cadastro" class="text-blue-600 hover:underline">Criar Conta</router-link></p>
                    <p v-if="mensagem" class="text-red-600 text-center mt-2">{{ mensagem }}</p>
                </div>

            </form>
        </div>
    </DefaultLayout>

</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout.vue"
import { loginUsuario } from "../services/api.js"

export default {
  name: "Login",
  components: {
    DefaultLayout,
  },
  data() {
    return {
      email: "",
      senha: "",
      mensagem: "",
    }
  },
  methods: {
    async fazerLogin() {

      try {
        const resposta = await loginUsuario(this.email, this.senha)
        if (resposta.mensagem) {
          localStorage.setItem("idUsuario", resposta.id)
          this.$router.push("/dashboard")
        }
      } catch (erro) {
        this.mensagem =
          erro?.response?.data?.mensagem || "Erro ao tentar fazer login"
      }
    },
  },
}
</script>
