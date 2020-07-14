import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';

import { createTask } from '../../../db/todo/create';
import { getTodos } from '../../../db/todo/get';



const addTodo = async (req: Request, res: Response, next: NextFunction) => {

    if (!req.body.todo) {
        return next(createError(403, 'todo is absent'))
    }

    try {
        const todoAdd = await createTask(req.body.todo);
        res.send(todoAdd);
    }
    catch{
        return next(createError(403, 'addTask  error'))
    }


}


export default addTodo;