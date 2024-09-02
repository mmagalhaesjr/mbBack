export const dadosSchema = Joi.object({
    nome:Joi.string().required(),
    telefone:Joi.number().required(),
    email:Joi.string().email().required(),
    cpf:Joi.string.number().required()
})