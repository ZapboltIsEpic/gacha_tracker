import {Request, Response, NextFunction} from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';


@Controller()
class MainController {
    @Route('get', '/')
    get(req: Request, res: Response, next: NextFunction) {
        console.log('Hello World!');
        return res.status(200).json({message: 'Hello World!'});
    }
}

export default MainController;