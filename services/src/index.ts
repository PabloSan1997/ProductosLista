import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createApi } from './routes/main';
import { boomHandle } from './middlewares/boomHandle';
import { AppDataSource } from "./db/config";
import { envVariables } from "./utilities/envVariable";


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

createApi(app);

app.use(boomHandle);

AppDataSource.initialize()
.then(()=>{
    app.listen(envVariables.port, ()=>{
        console.log(`http://localhost:${envVariables.port}`);
    });
})