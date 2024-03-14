import express, { Express } from 'express';
import { productRoutes } from './productoRoutes';

const mainRouter = express.Router();


export const createApi=(app:Express)=>{
    app.use('/api/v1', mainRouter);
    mainRouter.use('/products', productRoutes);
}