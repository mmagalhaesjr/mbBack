import db from '../DataBase/db.js';

async function createReservation({ scheduleId, idUser }) {

    return await db.query(`INSERT INTO reservation (idUser, idSchedule) VALUES (?, ?)`,
        [idUser, scheduleId])
}

async function getReservationsByUserId(idUser) {
    return await db.query(
        `SELECT 
            r.*, 
            u.name AS userName, 
            c.name AS cabinName,
            c.value AS cabinValue,
            s.date AS reservationDate ,
            s.time AS reservationTime
        FROM reservation r
        JOIN user u ON r.idUser = u.id
        JOIN schedule s ON r.idSchedule = s.id
        JOIN cabin c ON s.idCabin = c.id
        WHERE r.idUser = ?`, [idUser]
    )
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
