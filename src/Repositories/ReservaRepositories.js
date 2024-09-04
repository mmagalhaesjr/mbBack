import db from '../DataBase/db.js';

async function CriarReservas(dadosUsuario,idCamarote){
    return await db.query(``)
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
    deletarReservas
};
