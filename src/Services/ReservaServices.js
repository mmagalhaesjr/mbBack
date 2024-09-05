import ReservaRepositories from '../Repositories/ReservaRepositories.js';
import UsuarioServices from './UsuarioServices.js';


async function criarReserva({idShendule, dadosUsuario}) {

    const userId = await UsuarioServices.cadastrarUsuario(dadosUsuario)
 

    return await ReservaRepositories.CriarReservas({ idShendule, userId})   
}

export default {
    criarReserva,
}