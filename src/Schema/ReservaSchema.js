import Joi from 'joi';


export const dadosUsuarioSchema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    phone: Joi.number().integer().min(10000000000).max(99999999999).required(),
    cpf: Joi.string().length(11).pattern(/^\d+$/).required() // Regex para garantir que seja apenas dígitos e tenha 11 caracteres
});

// Definindo o esquema principal
export const reservaSchema = Joi.object({
    scheduleId: Joi.number().integer().required(),
    dadosUsuario: dadosUsuarioSchema
});

export const cpfSchema = Joi.object({
    cpf: Joi.string().pattern(/^\d+$/).required()  // Validando que o CPF contém apenas números
})
