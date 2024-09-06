import ReservaRepositories from '../Repositories/ReservaRepositories.js';


async function criarReserva(dadosBody) {
    
   const res =  await ReservaRepositories.CriarReservas(dadosBody) 
   console.log(res)
   return res

}

async function visualizarReservas() {
    // receber o id do usuario e passar para o repositories para ela trazer as reservas onde o idUser seja o mesmo que eu estou passando aq
}

export default {
    criarReserva,
    visualizarReservas
}