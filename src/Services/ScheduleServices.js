import ScheduleRepositories from '../Repositories/ScheduleRepositories.js';

async function getScheduleByCabinId({cabinId, date}) {

    const schedule = await ScheduleRepositories.getScheduleByCabinId({cabinId, date})

    if(!schedule[0][0]) throw Error("Não há horários disponíveis")
         
        return schedule[0]
}

export default {
    getScheduleByCabinId,
}