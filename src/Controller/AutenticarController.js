import AutenticarServices from "../Services/AutenticarServices.js";

async function signup(req, res) {
    const dadosBody = req.body;
    

    try {
        await AutenticarServices.cadastrarUsuario(dadosBody);
        return res.status(201).send('Usuário cadastrado com sucesso');
        
    } catch (error) {

        if (error.message === 'cpf já cadastrado') {
            return res.status(409).send('cpf já cadastrado');
            
        }else if (error.message === 'telefone já cadastrado') {
            return res.status(409).send('telefone já cadastrado');
        }
        console.error('Erro no serviço:', error.message);
        return res.status(500).send('Ocorreu um erro interno. Por favor, tente novamente mais tarde.');
    }
}

// ------------------------------------------------------------


async function login(req, res) {
    const cpfBody = req.body;
   
    try {
        const logar = await AutenticarServices.login(cpfBody);
        return res.status(200).send(logar);

    } catch (error) {
        if (error.message === 'CPF não cadasstrado, porfavor insira nome e telefone!') {
            return res.status(409).send('CPF não cadasstrado, porfavor insira nome e telefone!');
        }
        console.error('Erro no servidor:', error);
        return res.status(500).send('Ocorreu um erro interno. Por favor, tente novamente mais tarde.');
    }
}


export default {
    signup,
    login
}