import ReservaRepositories from '../Repositories/ReservaRepositories.js';
import ScheduleRepositories from '../Repositories/ScheduleRepositories.js';
import UsuarioRepositories from '../Repositories/UsuarioRepositories.js';
import UsuarioServices from './UsuarioServices.js';


async function createReservation({ scheduleId, dadosUsuario }) {

    const idUser = await UsuarioServices.signUpUser(dadosUsuario)

    const schedule = await ScheduleRepositories.getScheduleById(scheduleId)
  
    if (!schedule[0][0] || !schedule[0][0].available) throw Error("Não foi possível realizar a reserva")
 
   await ReservaRepositories.createReservation({ scheduleId, idUser })

   await ScheduleRepositories.updateSchedule(scheduleId, false)

   return

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
    getReservationsByUserId,
    deleteReservation
}