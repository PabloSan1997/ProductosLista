import { MiembroController } from "../controllers/MiembroController";
import express from 'express';

const controller = new MiembroController();

export const miembroRoutes = express.Router();


miembroRoutes.get('/', controller.leerMiembros);
miembroRoutes.post('/', controller.addMiembro);
miembroRoutes.delete('/:id_miembro', controller.eliminarMiembro);