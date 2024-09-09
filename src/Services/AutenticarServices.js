import AutenticarRepositories from '../Repositories/AutenticarRepositories.js';
import { v4 as uuidv4 } from 'uuid';


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
    const verificaDados = await AutenticarRepositories.verificaDados(cpfBody)

   console.log(verificaDados[0][0])

    if(!verificaDados[0][0]){
        throw new Error('CPF não cadasstrado, porfavor insira nome e telefone!');
    }
    const idUsuario = verificaDados[0][0].id
    const token = uuidv4();

    
    // remove o token antigo
       await AutenticarRepositories.removerTokensAntigos(idUsuario);
        // Insere o token na sessão
       await AutenticarRepositories.inserirTokenSecao(token, idUsuario);
   
       return {token,idUsuario};

}

export default {
    cadastrarUsuario,
    login
}