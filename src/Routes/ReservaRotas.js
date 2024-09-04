import { Router } from "express";


import { validarDados } from '../Middleware/ValidarDados.js';
import { signupSchema } from '../Schema/AutenticarSchema.js';
import ReservaController from "../Controller/ReservaController.js";

const reservaRotas = Router()

reservaRotas.post("/reserva", ReservaController.criarReserva)


export default reservaRotas;
