import ReservaRepositories from '../Repositories/ReservaRepositories.js';
import ReservationRepositories from '../Repositories/ReservaRepositories.js';
import UsuarioServices from './UsuarioServices.js';

// dados reserva: {  "scheduleId": 1,   "user": {"name": "esther", "phone": 32988475771, "cpf": "77777777777"} }

async function criarReserva({scheduleId, dadosUsuario}) {

    const userId = await UsuarioServices.cadastrarUsuario(dadosUsuario)
    console.log('ok')
    
    return await ReservaRepositories.CriarReservas({ scheduleId, userId})   
}

export default {
    criarReserva,
}