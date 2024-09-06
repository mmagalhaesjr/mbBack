import db from '../DataBase/db.js';


async function verificaCpf(dadosBody) {
    return await db.query('SELECT * FROM user WHERE cpf = ?  ', [dadosBody.cpf]);
  }

async function verificaPhone(dadosBody) {
    return await db.query('SELECT * FROM user WHERE phone = ? ', [dadosBody.phone]);
  }
  
  
  async function cadastrarUsuario(dadosBody) {
    return await db.query(
      `INSERT INTO user (cpf, name, phone) VALUES (?, ?, ?)`,
      [
        dadosBody.cpf,
        dadosBody.name,
        dadosBody.phone
      ]
    );
  }

  async function verificaSessao(token, idUsuario) {
    const result = await db.query(`SELECT * FROM section WHERE  = ?`, [token, idUsuario]);
    return result.rows.length > 0;
}

  async function inserirTokenSecao(token, idUsuario) {
    await db.query(`INSERT INTO section (iduser, token) VALUES (?,?)`, [token, idUsuario]);
}
async function removerTokensAntigos(token, idUsuario) {
    await db.query('DELETE FROM section WHERE iduser = ?', [token, idUsuario]);
}
  












export default {
    verificaCpf,
    verificaPhone,
    cadastrarUsuario,
    inserirTokenSecao,
    removerTokensAntigos ,
    verificaSessao
}
