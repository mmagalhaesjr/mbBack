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












export default {
    verificaCpf,
    cadastrarUsuario,  
}
