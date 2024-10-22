import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGetAll } from '../decorators/mongoose/getAll';
import { Users } from '../models/usersModel';
import { MongoCreate } from '../decorators/mongoose/create';

@Controller('/api/gachatracker/gachatrackerusers')
export class UsersController {
    @Route('get', '/get/all')
    @MongoGetAll(Users)
    getAllUsers(req: Request, res: Response) {
        console.log('Get all users');
        return res.status(200).json(req.mongoGetAll);
    }

    @Route('get', '/get/:id') 
    getUserById(req: Request, res: Response) {
        return res.status(200).json(req.mongoGet);
    }

    @Route('post', '/create')
    @MongoCreate(Users)
    createUser(req: Request, res: Response) {
        return res.status(200).json(req.mongoCreate);
    }

    @Route('put', '/update/:id')
    updateUser(req: Request, res: Response) {
        return res.status(200).json(req.mongoUpdate);
    }

    @Route('delete', '/delete/:id')
    deleteUser(req: Request, res: Response) {
        return res.status(200).json({message: 'User deleted'});
    }


}