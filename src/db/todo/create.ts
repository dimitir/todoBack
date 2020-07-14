import { TodoShema } from './schema';


const createTask = async (todo: string) => {
    const task = {
        todo: todo,
        checked: false
    }
    const todoCreate = await TodoShema.create(task);
    return await todoCreate.save();
}

export {
    createTask,
}

