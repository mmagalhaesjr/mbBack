import { Router } from "express";

import ReservaController from "../Controller/ReservaController.js";
import { validarDados } from "../Middleware/ValidarDados.js";
import { cpfSchema, reservaSchema } from "../Schema/ReservaSchema.js";

const reservaRotas = Router()

reservaRotas.post("/reserva", validarDados(reservaSchema), ReservaController.createReservation)
reservaRotas.get('/reservas/:userCPF', ReservaController.getReservationsByUserId)
reservaRotas.delete('/reserva/:id', ReservaController.deleteReservation)


export default reservaRotas;
