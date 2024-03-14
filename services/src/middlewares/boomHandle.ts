import { Request, Response, NextFunction } from "express";
import { Boom } from '@hapi/boom';

export function boomHandle(err:Boom, req:Request, res:Response, next:NextFunction) {
    if(err.isBoom){
        const {payload} = err.output;
        res.status(payload.statusCode).json(payload);
    }else{
        next(err);
    }
 }