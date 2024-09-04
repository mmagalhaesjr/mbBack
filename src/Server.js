import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import autenticarRotas from "./Routes/AutenticarRotas.js";





dotenv.config()


const server = express().use(cors());
server.use(express.json())


server.use(autenticarRotas)


const PORTA = process.env.PORTA 

server.listen(PORTA, () => {
    console.log(`*** Servidor rodando na porta ${PORTA} ***`);
});