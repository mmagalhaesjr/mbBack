import db from '../DataBase/db.js';

async function getScheduleByCabinId({ cabinId, date }) {

  const startDate = new Date(date)
  const endDate = new Date(date)
  endDate.setDate(startDate.getDate() + 1);

  return await db.query('SELECT * FROM schedule WHERE idCabin = ? AND date >= ? AND date < ?',
    [cabinId, startDate, endDate]);
}

async function getScheduleById(scheduleId) {

  return await db.query('SELECT * FROM schedule WHERE id = ? ',
    [scheduleId]);
}

async function updateSchedule(scheduleId, available) {
  return db.query('UPDATE schedule SET available = ? WHERE id = ?', [available, scheduleId]);
}



export default {
  getScheduleByCabinId,
  getScheduleById,
  updateSchedule
}
