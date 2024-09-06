import ReservaRepositories from '../Repositories/ReservaRepositories.js';


async function criarReserva(dadosBody,authorization) {

    const token = authorization.replace("Bearer ", ""); // tem que ter um espaço após o Bearer

        const tokenBd = await ReservaRepositories.verificaToken(token);
        
        if (tokenBd[0][0].length === 0) {
            throw new Error('Token inválido');
        }
    
        return await ReservaRepositories.CriarReservas(dadosBody,tokenBd) 

}

async function visualizarReservas() {
    // receber o id do usuario e passar para o repositories para ela trazer as reservas onde o idUser seja o mesmo que eu estou passando aq
}

export default {
    criarReserva,
    visualizarReservas
}