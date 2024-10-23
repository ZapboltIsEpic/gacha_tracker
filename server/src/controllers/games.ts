import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGetAll } from '../decorators/mongoose/getAll';
import { Games } from '../models/gamesModel';
import { MongoCreate } from '../decorators/mongoose/create';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

@Controller('/api/gachatracker/games')
export class GamesController {
    @Route('get', '/get/all')
    @MongoGetAll(Games)
    getAllGames(req: Request, res: Response) {
        console.log('Get all games');
        return res.status(200).json(req.mongoGetAll);
    }

    @Route('post', '/create', upload.single('image'))
    @MongoCreate(Games)
    createGame(req: Request, res: Response) {
        return res.status(200).json(req.mongoCreate);
    }
}