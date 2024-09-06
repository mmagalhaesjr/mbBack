import { Router } from "express";

import ReservaController from "../Controller/ReservaController.js";
import { validarToken } from '../Middleware/ValidarToken.js';

const reservaRotas = Router()


reservaRotas.post("/reserva",validarToken, ReservaController.criarReserva)



export default reservaRotas;
