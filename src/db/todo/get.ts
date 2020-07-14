import { TodoShema } from './schema';

const getTodos = async () => {
    return await TodoShema.find({});
}
const getCountActive = async () => {
    return await TodoShema.countDocuments({ checked: false });
}



export {
    getTodos,
    getCountActive
}

