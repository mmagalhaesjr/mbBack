import { Router } from "express";
import { validarDados } from '../Middleware/ValidarDados.js';
import { dadosSchema } from "../Schema/dadosSchema.js";
import DadosController from "../Controller/DadosController.js";

const rotaReservar = Router();

rotaReservar.post("/reservar", validarDados(dadosSchema), DadosController.fazerReserva)

export default rotaReservar;
