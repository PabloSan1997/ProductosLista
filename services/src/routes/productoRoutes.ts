import express from 'express';
import { ProductoController } from '../controllers/PoductoController';


export const productRoutes = express.Router();
const controller = new ProductoController();

productRoutes.get('/', controller.findProducts);
productRoutes.post('/', controller.generarProducto);
productRoutes.delete('/:id_product', controller.elimanarProducto);