import ReservaServices from '../Services/ReservaServices.js';

async function createReservation(req, res) {
    const {cabinId, date, time, dadosUsuario} = req.body;


    try {
        await ReservaServices.createReservation({cabinId, date, time, dadosUsuario});
        return res.status(201).send('Reserva criada com sucesso');

    } catch (error) {

        console.error('Erro no serviço:', error.message);
        return res.status(500).send('Ocorreu um erro interno. Por favor, tente novamente mais tarde.');
    }
}


async function getReservationsByCabinId(req, res) {

    const { cabinId, date } = req.params;

    try {
        const reservas = await ReservaServices.getReservationsByCabinId({cabinId, date});
        return res.status(200).send(reservas);

    } catch (error) {

        return res.status(401).send(error.message);
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
    deleteReservation,
    getReservationsByCabinId
}

