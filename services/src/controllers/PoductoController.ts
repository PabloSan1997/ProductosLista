import { Request, Response, NextFunction } from 'express';
import { ProductoService } from '../services/ProductoService';
import Boom from '@hapi/boom';


const servicio = new ProductoService();

export class ProductoController {
    async findProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const datos = await servicio.findProductos();
            res.json(datos);
        } catch (error) {
            next(error);
        }
    }
    async generarProducto(req: Request, res: Response, next: NextFunction) {
        try {
            const nuevo = servicio.nuevoProducto(req.body);
            res.status(201).json(await nuevo)
        } catch (error) {
            next(error);
        }
    }
}