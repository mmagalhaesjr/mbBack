import { Router } from "express";

import ReservaController from "../Controller/ReservaController.js";

const reservaRotas = Router()


reservaRotas.post("/reserva", ReservaController.criarReserva)



export default reservaRotas;
