import AutenticarServices from '../Services/AutenticarServices.js';

async function signup(req, res) {
    const dadosUsuario = req.body;
    

    try {
        await AutenticarServices.signup(dadosUsuario);
        return res.status(201).send('logado');
    } catch (error) {
        if (error.message) {
            return res.status(409).send(error.message);
        }

        console.error('Erro no serviço:', error.message);
        return res.status(500).send('Ocorreu um erro interno. Por favor, tente novamente mais tarde.');
    }
}

export default {
    signup,

}