import ReservaRepositories from '../Repositories/ReservaRepositories.js';
import UsuarioServices from './UsuarioServices.js';


async function criarReserva({idSchedule, dadosUsuario}) {

    const userId = await UsuarioServices.cadastrarUsuario(dadosUsuario)
 
    return await ReservaRepositories.CriarReservas({ idSchedule, userId})   
}

export default {
    criarReserva,
}