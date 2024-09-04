import UsuarioRepositories from '../Repositories/UsuarioRepositories.js';


async function cadastrarUsuario(dadosUsuario) {
    
    const resultado =  await UsuarioRepositories.verificaCpf(dadosUsuario);

   

    if (!resultado[0][0]) {
        const newUser = await UsuarioRepositories.cadastrarUsuario({ cpf: dadosUsuario.cpf, name: dadosUsuario.name, phone: dadosUsuario.phone });
        return newUser[0].insertId
    }

    return resultado[0][0].id;

    
}

export default {
    cadastrarUsuario,
}