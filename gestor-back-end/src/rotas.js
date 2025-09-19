import pool from "./db.js";
import argon2 from "argon2";
const db = pool;
let userID=null

export default async function Rotas(fastify, options) {
  //rota principal
  fastify.get("/", async (requisicao, resposta) => {});
  //rota de cadastro e login
  fastify.post("/contas/:opcao", {
    schema: {
      body: {
        type: "object",
        required: ["email", "senha"],
        properties: {
          nome:{type:'string'},
          email: { type: "string", format: "email" },
          senha: { type: "string", minLength: 6 },
        },
      },
    },
    handler: async (requisicao, resposta) => {
      const { opcao } = requisicao.params;

      switch (opcao) {
        case "login":
          const logar = await Login();
          return logar;
          break;
        case "cadastro":
          const cadastro = await Cadastro();
          return cadastro;
          break;
      }
      //funcao de login
      async function Login() {
        const { email, senha } = requisicao.body;

        const usuario = await db.query(
          "SELECT * FROM usuarios WHERE email = $1",
          [email]
        );
        const user = usuario.rows[0];

        if (!user) {
          return resposta.status(401).send({
            mensagem:
              "Nenhum usuário com essas credenciais está cadastrado na nossa plataforma",
          });
        }

        const senhaCorreta = await argon2.verify(user.senha, senha);
        if (!senhaCorreta) {
          return resposta.status(401).send({
            mensagem: "Credenciais inválidas, verifique a tua senha ",
          });
        }
        userID=user.id
        console.log('Usuario ID',userID);
        resposta.send({
          mensagem: `Seja bem-vindo de volta, ${user.nome}!`,id:user.id
        });
      }

      //Funcao para cadastro de novos usuarios
      async function Cadastro() {
        const { nome, email, senha } = requisicao.body;
        try {
          if (senha.length < 6) {
            return resposta.send({
              erro: "A senha deve ter 6 ou mais digitos",
            });
          }
          let usuario = await db.query(
            "select * from usuarios where email=$1",
            [email]
          );
          if (usuario.rows.length > 0) {
            return resposta.send({
              Erro: "Este email ja esta cadastrado, utilize outro por favor!",
            });
          }
          const senhaCriptografada = await argon2.hash(senha);
          usuario = await db.query(
            "insert into usuarios(nome,email,senha) values($1,$2,$3)",
            [nome, email, senhaCriptografada]
          );
          if (usuario.rowCount === 0) {
            return resposta.send({
              mensagem: "Ocorreu um erro, verifique as tuas credencias",
            });
          }

          return resposta.send({ mensagem: "Usuario cadastrado com sucesso" });
        } catch (error) {
          return resposta.send({
            error:
              "Por favor, contacte o desenvolvedor do sistema: Cleytonversace1@gmail.com",
          });
          // console.log(error);
        }
      }
    },
  });
  //rota para criar transacoes, mais notei que falta PASETO ou JWT, para autenticacao de tokens,
  // em alternativa usei uma variavel "idUser"
  fastify.post("/transacoes", {
    schema: {
      body: {
        type: "object",
        required: ["valor", "descricao", "tipo",'idUser'],
        properties: {
          valor: { type: "number" },
          descricao: { type: "string", minLength: 4 },
          tipo: { type: "string" },
          idUser:{type:'number'}
        },
      },
    },
    handler: async (requisicao, resposta) => {
      const { valor, descricao, tipo,idUser } = requisicao.body;
      if ((tipo === "entrada" || tipo === "saida") && valor != 0) {
        // const saldo=await db.query("select saldo from transacoes")
        const criarTransacao = await db.query(
          "insert into transacoes(valor,descricao,tipo,id_usuario) values($1,$2,$3,$4)",
          [valor, descricao, tipo, idUser]
        );
        criarTransacao.rows[0];
        if (!criarTransacao) {
           resposta.send({
            Erro: "Erro ao criar transacoes, por favor tente novamente",
          });
        }

        return resposta.send({mensagem:'Transacoes criado com sucesso!'
        });
      }
      resposta.send({
        mensagem: "Por favor, o valor deve ser maior que 0",
      });
    },
  });
  //rota para listar transacoes
  fastify.get("/transacoes", async (requisicao, resposta) => {
    const userID = requisicao.query.userID;

  if (!userID) {
    return resposta.status(400).send({ erro: "ID do usuário não fornecido" });
  }

  try {
    const resultado = await db.query(
      `SELECT valor, descricao, tipo 
       FROM transacoes 
       WHERE id_usuario = $1`, 
       [userID]
    );

    return resposta.send(resultado.rows);
  } catch (error) {
    return resposta.status(500).send({
      Erro: `Erro ao listar transações: ${error}`,
    });
  }
  });
}
