import { TodoShema } from './schema';

const checkedUpdate = async (id: string, checked: boolean) => {
    return await TodoShema.findByIdAndUpdate(id, { checked: checked }, { new: true });
}


const deleteChecked = async () => {
    return await TodoShema.deleteMany({ checked: true });
}

export {
    checkedUpdate,
    deleteChecked,
}


