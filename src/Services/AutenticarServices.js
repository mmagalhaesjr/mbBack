import AutenticarRepositories from '../Repositories/AutenticarRepositories.js'
import { v4 as uuidv4 } from 'uuid';


async function signup(dadosUsuario) {
    const { rowCount } = await AutenticarRepositories.verificaCpf(dadosUsuario);

    if (rowCount > 0) {

        const idUsuario = verificaDados[0][0].id;
        const token = uuidv4();

        await AutenticarRepositories.inserirTokenSecao(idUsuario, token);
        await AutenticarRepositories.removerTokensAntigos(idUsuario);
        return {token, idUsuario};
    }

    await AutenticarRepositories.cadastrarUsuario({ cpf: dadosUsuario.cpf, name: dadosUsuario.name, phone: dadosUsuario.phone });
}

export default {
    signup,
}