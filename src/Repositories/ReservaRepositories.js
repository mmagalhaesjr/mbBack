import db from '../DataBase/db.js';



async function CriarReservas(dadosUsuario){
    return await db.query(`INSERT INTO reservation (idUser, idShendule) 
        VALUES (?, ?)`[dadosUsuario.idUser, dadosUsuario.idShendule])
}

async function visualizarReservas(dadosUsuario,idCamarote){
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
