import Joi from 'joi';

export const dadosSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.number().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().pattern(/^\d+$/).required()  // Validando que o CPF contém apenas números
});
