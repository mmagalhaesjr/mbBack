import AutenticarRepositories from '../Repositories/AutenticarRepositories.js';


async function cadastrarUsuario(dadosBody) {
    
    const verificaCpf =  await AutenticarRepositories.verificaCpf(dadosBody);
    const verificaPhone =  await AutenticarRepositories.verificaPhone(dadosBody);



    if(verificaCpf[0][0]){
        throw new Error('cpf já cadastrado');
    }else if(verificaPhone[0][0]){
        throw new Error('telefone já cadastrado');
    }

    await AutenticarRepositories.cadastrarUsuario(dadosBody);

}



// ------------------------------------------------------------



async function login(cpfBody) {
    const verificaCpf = await AutenticarRepositories.verificaCpf(cpfBody)

    if(!verificaCpf[0][0]){
        throw new Error('CPF não cadasstrado, porfavor insira nome e telefone!');
    }

    await AutenticarRepositories.cadastrarUsuario(dadosBody);
}

export default {
    cadastrarUsuario,
    login
}