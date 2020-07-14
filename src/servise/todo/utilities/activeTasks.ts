import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { getCountActive } from '../../../db/todo/get';


const activeTasks = async (res: Response, next: NextFunction) => {
    try {
        const countActive = await getCountActive();
        res.send({ countActive });
    }
    catch{
        return next(createError(403, 'activeTasks  error'))
    }
}


export default activeTasks;