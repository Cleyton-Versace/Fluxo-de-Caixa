import dotenv from "dotenv"
dotenv.config()
import Rotas from "./src/rotas.js";
import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
const fastify=Fastify({logger:true})

// fastify.get('/',async(req,res)=>{
//     return ({mensagem:process.env.DATABASE_URL})
// })
fastify.register(fastifyCors,{
    origin:'*',
})
fastify.register(Rotas)
fastify.listen({port:3000},()=>{
    try {
        console.log("Servidor rodando na porta:",process.env.PORT);
    } catch (error) {
        console.log("Ocorreu um erro ao inicializar o servidor, verifique o seguinte erro:",error);
    }
})