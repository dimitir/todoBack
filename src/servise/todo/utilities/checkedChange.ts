import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { checkedUpdate } from '../../../db/todo/update';



const checkedChange = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.body.id;
    const checked = req.body.checked;

    if (!id) {
        return next(createError(403, 'checkedChange id and checked is require'))
    }

    try {
        const checkedUpd = await checkedUpdate(id, checked);
        console.log(checkedUpd);
        res.send('OK');
    }
    catch{
        return next(createError(403, 'checkedUpdate error'))
    }
}

export default checkedChange;