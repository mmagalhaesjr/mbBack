export function validarDados(schema) {
    return (req, res, next) => {
        const usuario = req.body;

        const { error } = schema.validate(usuario, { abortEarly: false });
        if (error) {
            const erros = error.details.map((obj) => obj.message);
            return res.status(422).send(erros);
        }

        next();
    };
}
