import { Router } from "express";

import ReservaController from "../Controller/ReservaController.js";
import { validarDados } from "../Middleware/ValidarDados.js";
import { cpfSchema, reservaSchema } from "../Schema/ReservaSchema.js";

const reservaRotas = Router()

// reservaRotas.post("/reserva", validarDados(reservaSchema), ReservaController.createReservation)
reservaRotas.post("/reserva", ReservaController.createReservation)
reservaRotas.get('/reservas/:userCPF', ReservaController.getReservationsByUserId)
reservaRotas.get("/reservas/:cabinId/:date", ReservaController.getReservationsByCabinId)
reservaRotas.delete('/reserva/:id', ReservaController.deleteReservation)


export default reservaRotas;
