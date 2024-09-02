import DadosRespositories from "../Repositories/DadosRespositories.js";

async function fazerReserva(dadosUsuario) {

    await DadosRespositories.fazerReserva(dadosUsuario);
}

export default {
    fazerReserva
};
