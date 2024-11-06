import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGetAll } from '../decorators/mongoose/getAll';
import { MongoCreate } from '../decorators/mongoose/create';
import multer from 'multer';
import { FGOPersonalisedServants } from '../models/fgoPersonalisedServantsModel';

@Controller('/api/gachatracker/fgo/servants')
export class FGOServantsController {
    @Route('get', '/get/all')
    @MongoGetAll(FGOPersonalisedServants)
    getAllServants(req: Request, res: Response) {
        console.log('Get all servants');
        return res.status(200).json(req.mongoGetAll);
    }

    @Route('post', '/create')
    @MongoCreate(FGOPersonalisedServants)
    createServant(req: Request, res: Response) {
        return res.status(200).json(req.mongoCreate);
    }
}