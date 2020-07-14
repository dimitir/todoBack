import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { createTask } from '../../../db/todo/create';


const addTodoGet = async (todo: string, res: Response, next: NextFunction) => {

    try {
        await createTask(todo);
        res.sendFile(path.join(__dirname, '../../../../public/', 'index.html'));
    }
    catch{
        return next(createError(403, 'addTask  error'))
    }
}


export default addTodoGet;