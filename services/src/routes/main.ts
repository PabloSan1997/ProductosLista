import express, { Express } from 'express';
import { productRoutes } from './productoRoutes';
import { miembroRoutes } from './miembroRoutes';

const mainRouter = express.Router();


export const createApi=(app:Express)=>{
    app.use('/api/v1', mainRouter);
    mainRouter.use('/products', productRoutes);
    mainRouter.use('/miembro', miembroRoutes);
}