import ReservaRepositories from '../Repositories/ReservaRepositories.js';
import UsuarioServices from './UsuarioServices.js';


async function criarReserva({scheduleId, dadosBody}) {

    const userId = await UsuarioServices.cadastrarUsuario(dadosBody)

    return await ReservaRepositories.CriarReservas({ idShendule, idUser})   
}

export default {
    criarReserva,
}