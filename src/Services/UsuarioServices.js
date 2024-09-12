import UsuarioRepositories from '../Repositories/UsuarioRepositories.js';


async function signUpUser(dadosUsuario) {

    const resultado =  await UsuarioRepositories.getUserByCpf(dadosUsuario.cpf);

    if (!resultado[0][0]) {
        const newUser = await UsuarioRepositories.signUpUser({ cpf: dadosUsuario.cpf, name: dadosUsuario.name, phone: dadosUsuario.phone });
        return newUser[0].insertId
    }

    return resultado[0][0].id;


}

export default {
    signUpUser,
}