import express from "express";
import cors from "cors";




import dotenv from "dotenv";


dotenv.config()


const server = express().use(cors());
server.use(express.json())







const PORTA = process.env.PORTA 

server.listen(PORTA, () => {
    console.log(`*** Servidor rodando na porta ${PORTA} ***`);
});