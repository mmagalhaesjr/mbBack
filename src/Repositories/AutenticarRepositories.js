import db from '../DataBase/db.js';


async function verificaDados(dadosUsuario) {
    return await db.query('SELECT * FROM user WHERE phone = ? AND cpf = ?', [dadosUsuario.telefone, dadosUsuario.cpf]);
}

async function cadastrarUsuario(dadosUsuario) {
    return await db.query(
        `INSERT INTO user (name, phone, cpf) 
        VALUES (?, ?, ?)`,
        [
            dadosUsuario.name,
            dadosUsuario.phone,
            dadosUsuario.cpf
        ]
    );
}










export default {
    verificaDados,
    cadastrarUsuario, 
}
