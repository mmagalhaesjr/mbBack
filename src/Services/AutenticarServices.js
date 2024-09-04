import AutenticarRepositories from '../Repositories/AutenticarRepositories.js'



async function signup(dadosUsuario) {
    const resultado =  await AutenticarRepositories.verificaCpf(dadosUsuario);

    if (!resultado[0][0]) {

       return await AutenticarRepositories.cadastrarUsuario({ cpf: dadosUsuario.cpf, name: dadosUsuario.name, phone: dadosUsuario.phone });
    }

    const idUsuario = resultado[0][0].id;

    
}

export default {
    signup,
}