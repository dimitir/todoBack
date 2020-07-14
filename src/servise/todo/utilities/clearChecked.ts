import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { deleteChecked } from '../../../db/todo/update';


const clearChecked = async (req: Request, res: Response, next: NextFunction) => {

    try {
        await deleteChecked();
        res.status(200).send('OK');
    }
    catch{
        return next(createError(403, 'clearChecked  error'))
    }

}


export default clearChecked;