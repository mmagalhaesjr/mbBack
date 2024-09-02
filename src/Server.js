import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import rotaReservar from "./Routes/RotaReservar.js";


dotenv.config()


const server = express().use(cors());
server.use(express.json())


server.use(rotaReservar)




const PORTA = process.env.PORTA 

server.listen(PORTA, () => {
    console.log(`*** Servidor rodando na porta ${PORTA} ***`);
});