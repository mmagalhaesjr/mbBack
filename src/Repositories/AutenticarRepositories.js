import db from '../DataBase/db.js';


async function verificaCpf(dadosUsuario) {
    return await db.query('SELECT * FROM user WHERE cpf = ?', [dadosUsuario.cpf]);
}

async function cadastrarUsuario(dadosUsuario) {
    return await db.query(
        `INSERT INTO user (cpf, name, phone) 
        VALUES (?, ?, ?)`,
        [
            dadosUsuario.cpf,
            dadosUsuario.name,
            dadosUsuario.phone,
            
        ]
    );
}

async function verificaSessao(idUsuario) {
    const result = await db.query(`SELECT * FROM section WHERE idUser = ?`, [idUsuario]);
    return result.rows.length > 0;
}

async function inserirTokenSecao(idUsuario, token) {
    await db.query(`INSERT INTO section (idUser, token) VALUES (?,?)`, [idUsuario, token]);
}
async function removerTokensAntigos(idUsuario) {
    await db.query('DELETE FROM section WHERE idUser = ?', [idUsuario]);
}










export default {
    verificaCpf,
    cadastrarUsuario, 
    inserirTokenSecao,
    removerTokensAntigos
}
