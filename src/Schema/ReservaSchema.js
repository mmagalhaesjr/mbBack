import Joi from 'joi';

export const ReservaSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.number().required(),
    cpf: Joi.string().pattern(/^\d+$/).required()  // Validando que o CPF contém apenas números
});

