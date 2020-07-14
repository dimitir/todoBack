import express, { Request, Response, NextFunction } from 'express';
import addTodo from './utilities/addTodo';
import addTodoGet from './utilities/addTodoGet';
import activeTasks from './utilities/activeTasks';
import getTasks from './utilities/getTasks';
import checkedChange from './utilities/checkedChange';
import clearChecked from './utilities/clearChecked';

const router = express.Router();
const jsonParser = express.json();


router.post('/add', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    addTodo(req, res, next);
});

router.get('/add', (req: Request, res: Response, next: NextFunction) => {
    const todo = req.query.todo;
    addTodoGet((todo as string), res, next);
});


router.get('/list', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    getTasks(req, res, next);
});


router.post('/activTasks', (req: Request, res: Response, next: NextFunction) => {
    activeTasks(res, next);
});


router.put('/checked', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    checkedChange(req, res, next);
});

router.delete('/clearChecked', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    clearChecked(req, res, next);
});



export default router;