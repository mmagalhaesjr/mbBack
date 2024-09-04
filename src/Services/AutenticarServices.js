import AutenticarRepositories from '../Repositories/AutenticarRepositories.js'


async function signup(dadosUsuario) {
    const { rowCount } = await AutenticarRepositories.verificaDados(dadosUsuario);

    if (rowCount > 0) {
        throw new Error('Usuário já cadastrado');
    }

    await AutenticarRepositories.cadastrarUsuario({ name: dadosUsuario.name, phone: dadosUsuario.phone, cpf: dadosUsuario.cpf });
}

export default {
    signup,
}