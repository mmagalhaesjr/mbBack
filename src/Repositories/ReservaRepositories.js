import db from '../DataBase/db.js';

async function createReservation({ scheduleId, idUser }) {

    return await db.query(`INSERT INTO reservation (idUser, idSchedule) VALUES (?, ?)`,
        [idUser, scheduleId])
}

async function getReservationsByUserId(idUser) {
    return await db.query('SELECT * FROM reservation WHERE idUser = ?', [idUser])
}

async function getReservationById(reservationId) {

    return await db.query('SELECT * FROM reservation WHERE id = ?', [reservationId])
}

async function deleteReservation(reservationId) {
    return await db.query('DELETE FROM reservation WHERE id = ?',
        [reservationId])
}



export default {
    createReservation,
    getReservationsByUserId,
    getReservationById,
    deleteReservation
};
