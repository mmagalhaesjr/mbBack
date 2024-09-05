import db from '../DataBase/db.js';



async function CriarReservas({userId,idSchedule}){
  
    return await db.query(`INSERT INTO reservation (idUser, idSchedule) VALUES (?, ?)`,[userId,idSchedule])
}

async function visualizarReservas(){
    return await db.query(` `)
}

async function deletarReservas(){
    return await db.query(` `)
}



export default {
    CriarReservas,
    visualizarReservas,
    deletarReservas,
};
