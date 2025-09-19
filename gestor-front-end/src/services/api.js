import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
})

// Login do usuário
export async function loginUsuario(email, senha) {
  const resposta = await api.post("/contas/login", { email, senha })
  return resposta.data
}

// Cadastro de usuário
export async function cadastrarUsuario(nome, email, senha) {
  const resposta = await api.post("/contas/cadastro", { nome, email, senha })
  return resposta.data
}

// Criar uma nova transação
export async function criarTransacao(valor, descricao, tipo, idUser) {
  const resposta = await api.post("/transacoes", {
    valor,
    descricao,
    tipo,
    idUser,
  })
  return resposta.data
}

// Listar transações de um usuário
export async function listarTransacoes(idUser) {
  const resposta = await api.get("/transacoes", {
    params: { userID: idUser },
  });
  return resposta.data;
}

export default api