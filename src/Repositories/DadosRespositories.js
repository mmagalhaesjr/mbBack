import db from '../DataBase/db.js';

async function fazerReserva(dadosUsuario) {
    return await db.query(
        `INSERT INTO user (name, email, phone, cpf) 
        VALUES (?, ?, ?, ?)`,
        [
            dadosUsuario.name,
            dadosUsuario.email,
            dadosUsuario.phone,
            dadosUsuario.cpf
        ]
    );
}

export default {
    fazerReserva
};
