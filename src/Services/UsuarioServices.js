import UsuarioRepositories from '../Repositories/UsuarioRepositories.js';


async function cadastrarUsuario(dadosBody) {
    
    const resultado =  await UsuarioRepositories.verificaCpf(dadosBody);

    if (!resultado[0][0]) {
        const newUser = await UsuarioRepositories.cadastrarUsuario({ cpf: dadosBody.dadosUsuario.cpf, name: dadosBody.dadosUsuario.name, phone: dadosBody.dadosUsuario.phone });
        return newUser[0].insertId
    }

    return resultado[0][0].id;

}

export default {
    cadastrarUsuario,
}