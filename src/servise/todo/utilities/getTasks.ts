import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { getTodos } from '../../../db/todo/get';



const getTasks = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const todos = await getTodos();
        res.send(todos);
    }
    catch{
        return next(createError(403, 'getTodos error'))
    }

}

export default getTasks;