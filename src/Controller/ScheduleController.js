import ScheduleServices from '../Services/ScheduleServices.js';


async function getScheduleByCabinId(req, res) {

    const { cabinId, date } = req.params;

    try {
        const minhasReservas = await ScheduleServices.getScheduleByCabinId({cabinId, date});
        return res.status(200).send(minhasReservas);

    } catch (error) {

        return res.status(401).send(error.message);
    }
}


export default {
    getScheduleByCabinId
}

