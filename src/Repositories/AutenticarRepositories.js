import db from '../DataBase/db.js';


async function verificaDados(dadosBody) {
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

  async function verificaSessao(idUsuario) {
    const result = await db.query(`SELECT * FROM section WHERE idUser = ?`, [idUsuario]);
    return result.rows.length > 0;
  }

  async function inserirTokenSecao(token, idUsuario) {
    await db.query(`INSERT INTO section (token, idUser) VALUES (?,?)`, [token, idUsuario]);
  }
  async function removerTokensAntigos(idUsuario) {
    await db.query('DELETE FROM section WHERE idUser = ?', [idUsuario]);
  }
  












export default {
  verificaDados,
    verificaPhone,
    cadastrarUsuario,
    inserirTokenSecao,
    removerTokensAntigos ,
    verificaSessao
}
