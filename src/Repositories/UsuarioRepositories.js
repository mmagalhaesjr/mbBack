import db from '../DataBase/db.js';


async function getUserByCpf(cpf) {
  return await db.query('SELECT * FROM user WHERE cpf = ?  ', [cpf]);
}


async function signUpUser(dadosBody) {
  return await db.query(
    `INSERT INTO user (cpf, name, phone) VALUES (?, ?, ?)`,
    [
      dadosBody.cpf,
      dadosBody.name,
      dadosBody.phone
    ]
  );
}


export default {
  getUserByCpf,
  signUpUser
}
