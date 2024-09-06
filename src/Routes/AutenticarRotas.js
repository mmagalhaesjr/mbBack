import { Router } from "express";

import { validarDados } from "../Middleware/ValidarDados.js";
import { cadastroSchema, loginSchema } from "../Schema/AutenticarSchema.js";
import AutenticarController from "../Controller/AutenticarController.js";





const autenticarRotas = Router()

autenticarRotas.post("/singup", validarDados(cadastroSchema), AutenticarController.signup)
autenticarRotas.post("/login",validarDados(loginSchema), AutenticarController. login)


export default autenticarRotas