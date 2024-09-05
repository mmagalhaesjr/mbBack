import db from '../DataBase/db.js';



async function verificaCpf(dadosBody) {
  return await db.query('SELECT * FROM user WHERE cpf = ?', [dadosBody.dadosUsuario.cpf]);
}


async function cadastrarUsuario(dadosBody) {
    return await db.query(
        `INSERT INTO user (cpf, name, phone) 
        VALUES (?, ?, ?)`,
        [
            dadosBody.dadosUsuario.cpf,
            dadosBody.dadosUsuario.name,
            dadosBody.dadosUsuario.phone,
            
        ]
    );
}












export default {
    verificaCpf,
    cadastrarUsuario,  
}
