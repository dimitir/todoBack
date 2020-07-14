import express from 'express';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;
import env from './env';
import routsApp from './routs';

const app = express();

app.use('/tasks', express.static(__dirname + '/../public'));
// app.use(express.static(__dirname + '/../public'));


const startServer = () => {
    app.listen(env.port, () => console.log(`App started on port ${env.port}`));
}


const connectDb = () => {
    console.log('connect db');
    const options = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
    mongoose.connect((env.dbConnectionString as string), options);
    return mongoose.connection
}


connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);


routsApp(app);