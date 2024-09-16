import db from '../DataBase/db.js';

async function createReservation({ idUser, cabinId, date, time }) {

    return await db.query(`INSERT INTO reservation (idUser, cabinId, date, time,) VALUES (?, ?, ?, ?)`,
        [idUser, cabinId, date, time])
}

async function getReservationsByCabinId({ cabinId, date }) {

    const startDate = new Date(date)
    const endDate = new Date(date)
    endDate.setDate(startDate.getDate() + 1);
  
    return await db.query('SELECT * FROM reservation WHERE idCabin = ? AND date >= ? AND date < ?',
      [cabinId, startDate, endDate]);
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
    getReservationsByCabinId,
    getReservationsByUserId,
    getReservationById,
    deleteReservation
};
