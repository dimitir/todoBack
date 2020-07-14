import { Application } from 'express';
import taskRouts from './servise/todo/todo.routs';

const routsApp = (app: Application) => {
    app.use('/tasks', taskRouts);
}

export default routsApp;