import ReservaServices from '../Services/ReservaServices.js';

async function criarReserva(req, res) {
    const dadosBody = req.body;
    
    try {
        await ReservaServices.criarReserva(dadosBody);
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
    criarReserva,
}