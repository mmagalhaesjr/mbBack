import DadosServices from "../Services/DadosServices.js";

async function fazerReserva(req, res) {
    const dadosUsuario = req.body;

    try {
        await DadosServices.fazerReserva(dadosUsuario);
        return res.status(201).send('Dados enviados');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro no servidor controller');
    }
}

export default {
    fazerReserva
};
