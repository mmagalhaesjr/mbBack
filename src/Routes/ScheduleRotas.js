import { Router } from "express";

import ScheduleController from "../Controller/ScheduleController.js";

const scheduleRotas = Router()

scheduleRotas.get("/schedule/:cabinId/:date", ScheduleController.getScheduleByCabinId)


export default scheduleRotas;
