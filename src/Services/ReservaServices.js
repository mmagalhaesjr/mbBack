import ReservaRepositories from '../Repositories/ReservaRepositories.js';
import UsuarioServices from './UsuarioServices.js';


async function criarReserva({scheduleId, dadosUsuario}) {

    const userId = await UsuarioServices.cadastrarUsuario(dadosUsuario)

    return await ReservaRepositories.CriarReservas({ scheduleId, userId})   
}

export default {
    criarReserva,
}