import db from '../DataBase/db.js';



async function getScheduleById(scheduleId) {

  return await db.query('SELECT * FROM schedule WHERE id = ? ',
    [scheduleId]);
}

async function updateSchedule(scheduleId, available) {
  return db.query('UPDATE schedule SET available = ? WHERE id = ?', [available, scheduleId]);
}



export default {
  getScheduleById,
  updateSchedule
}
