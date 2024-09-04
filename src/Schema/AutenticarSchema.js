import Joi from 'joi';

export const signupSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.number().required(),
    cpf: Joi.string().pattern(/^\d+$/).required()  // Validando que o CPF contém apenas números
});

export const loginSchema = Joi.object({
    cpf: Joi.string().pattern(/^\d+$/).required()
})