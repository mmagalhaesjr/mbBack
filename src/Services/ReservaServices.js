import ReservaRepositories from '../Repositories/ReservaRepositories.js';
import ScheduleRepositories from '../Repositories/ScheduleRepositories.js';
import UsuarioRepositories from '../Repositories/UsuarioRepositories.js';
import UsuarioServices from './UsuarioServices.js';


async function createReservation({ cabinId, date, time, dadosUsuario }) {

    const idUser = await UsuarioServices.signUpUser(dadosUsuario)
 
    return await ReservaRepositories.createReservation({ cabinId, date, time, idUser })

}

async function getReservationsByCabinId({cabinId, date}) {

    const reservas = await ReservaRepositories.getReservationsByCabinId({cabinId, date})

         
        return reservas[0]
}

async function getReservationsByUserId(cpf) {
    const user = await UsuarioRepositories.getUserByCpf(cpf)

    if(!user[0][0]) throw Error("Você não possui agendamentos")
         

    const reservations = await ReservaRepositories.getReservationsByUserId(user[0][0].id);

    if (reservations[0].length === 0) throw Error("Você não possui reservas")

    return reservations[0]
}

async function deleteReservation(reservationId) {
    const reservation = await ReservaRepositories.getReservationById(reservationId)

    if (!reservation[0][0]) throw new Error("Reserva não encontrada")

    await ReservaRepositories.deleteReservation(reservationId)
    await ScheduleRepositories.updateSchedule(reservation[0][0].scheduleId, 1)
}

export default {
    createReservation,
    getReservationsByCabinId,
    getReservationsByUserId,
    deleteReservation
}