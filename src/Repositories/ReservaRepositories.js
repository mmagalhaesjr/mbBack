import db from '../DataBase/db.js';

async function verificaToken(token) {
    return await db.query(`SELECT * FROM section WHERE token = ?`, [token]);
}

async function CriarReservas(dadosBody,tokenBd){
  
    return await db.query(`INSERT INTO reservation (idUser, idSchedule) VALUES (?, ?)`,[dadosBody.idUser,tokenBd[0][0].idUser])
}

async function visualizarReservas(){
    return await db.query('SELECT * FROM reservation WHERE cpf = ?', [cpf])
}

async function deletarReservas(){
    return await db.query(` `)
}



export default {
    CriarReservas,
    visualizarReservas,
    deletarReservas,
    verificaToken
};
