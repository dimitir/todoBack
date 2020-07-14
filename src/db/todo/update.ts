import { TodoShema } from './schema';

const checkedUpdate = async (id: string, checked: boolean) => {
    return await TodoShema.findByIdAndUpdate(id, { checked: checked });
}


const deleteChecked = async () => {
    return await TodoShema.deleteMany({ checked: true });
}

export {
    checkedUpdate,
    deleteChecked,
}


