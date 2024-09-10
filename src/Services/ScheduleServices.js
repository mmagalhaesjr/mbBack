import ScheduleRepositories from '../Repositories/ScheduleRepositories.js';

async function getScheduleByCabinId({cabinId, date}) {

    const schedule = await ScheduleRepositories.getScheduleByCabinId({cabinId, date})

         
        return schedule[0]
}

export default {
    getScheduleByCabinId,
}