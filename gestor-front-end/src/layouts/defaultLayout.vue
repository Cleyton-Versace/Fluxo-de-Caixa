<template>
  <div>
    <!-- Topo fixo -->
    <header class="bg-green-600 text-white p-4 flex justify-between items-center shadow">
      <h1 class="text-xl font-bold">Gestor de Fluxo de Caixa</h1>
      <div class="space-x-4">
        <router-link to="/dashboard" class="hover:underline">Dashboard</router-link>
        <router-link to="/novaTransacao" class="hover:underline">Nova Transação</router-link>
        <button @click="logout" class="hover:underline text-red-300 bg-red-800 py-2 px-4 rounded-2xl">Sair</button>
      </div>
    </header>

    <!-- Conteúdo da página -->
    <main class="pt-6">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  methods: {
    logout() {
      localStorage.removeItem("idUsuario")
      this.$router.push("/")
    },
  },
}
</script>