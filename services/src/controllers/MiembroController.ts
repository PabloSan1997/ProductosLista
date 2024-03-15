import { MiembroService } from "../services/MiembroService";
import {Request, Response, NextFunction} from 'express';

const service = new MiembroService();

export class MiembroController{
    async leerMiembros(req:Request, res:Response, next:NextFunction){
        try {
            const datos = await service.readMiembro();
            res.json(datos);
        } catch (error) {
            next(error);
        }
    }
    async addMiembro(req:Request, res:Response, next:NextFunction){
        try {
            const datos = await service.addMiembro(req.body);
            res.status(201).json(datos);
        } catch (error) {
            next(error);
        }
    }
    async eliminarMiembro(req:Request, res:Response, next:NextFunction){
        try {
            await service.eliminarMiembro(req.params.id_miembro);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }
}