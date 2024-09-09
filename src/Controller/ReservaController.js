import ReservaServices from '../Services/ReservaServices.js';

async function createReservation(req, res) {
    const {scheduleId, dadosUsuario} = req.body;


    try {
        await ReservaServices.createReservation({scheduleId, dadosUsuario});
        return res.status(201).send('Reserva criada com sucesso');

    } catch (error) {

        console.error('Erro no serviço:', error.message);
        return res.status(500).send('Ocorreu um erro interno. Por favor, tente novamente mais tarde.');
    }
}


async function getReservationsByUserId(req, res) {

    const { userCPF } = req.params;

    try {
        const minhasReservas = await ReservaServices.getReservationsByUserId(userCPF);
        return res.status(200).send(minhasReservas);

    } catch (error) {

        return res.status(401).send(error.message);
    }
}

async function deleteReservation(req, res) {
    const reservationId = Number(req.params.id)

    try {
        await ReservaServices.deleteReservation(reservationId);
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro no serviço:', error.message);
        return res.status(500).send('Ocorreu um erro interno. Por favor, tente novamente mais tarde.');
    }
}


export default {
    createReservation,
    getReservationsByUserId,
    deleteReservation
}

