import { Router } from "express";


import { validarDados } from '../Middleware/ValidarDados.js';
import { signupSchema } from '../Schema/AutenticarSchema.js';
import AutenticarController from "../Controller/AutenticarController.js";

const autenticarRotas = Router()

autenticarRotas.post("/singup", validarDados(signupSchema), AutenticarController.signup)


export default autenticarRotas;
