import db from '../DataBase/db.js';



async function verificaCpf(dadosBody) {
  return await db.query('SELECT * FROM user WHERE cpf = ?', [dadosBody.cpf]);
}


async function cadastrarUsuario(dadosBody) {
    return await db.query(
        `INSERT INTO user (cpf, name, phone) 
        VALUES (?, ?, ?)`,
        [
            dadosBody.cpf,
            dadosBody.name,
            dadosBody.phone,
            
        ]
    );
}












export default {
    verificaCpf,
    cadastrarUsuario,  
}
