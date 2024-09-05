import db from '../DataBase/db.js';



async function CriarReservas(dadosBody){
    return await db.query(`INSERT INTO reservation (idUser, idShendule) 
        VALUES (?, ?)`[dadosBody.idUser, dadosBody.idShendule])
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
