import { Router } from "express";

import { validarDados } from '../Middleware/ValidarDados.js';
import { ReservaSchema } from "../Schema/ReservaSchema.js";
import ReservaController from "../Controller/ReservaController.js";

const reservaRotas = Router()

reservaRotas.post("/reserva",validarDados(ReservaSchema), ReservaController.criarReserva)



export default reservaRotas;
