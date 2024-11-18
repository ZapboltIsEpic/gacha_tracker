import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGetAll } from '../decorators/mongoose/getAll';
import { Users } from '../models/usersModel';
import { MongoCreate } from '../decorators/mongoose/create';
import bcrypt from 'bcrypt'

@Controller('/api/gachatracker/gachatrackerusers')
export class UsersController {
    @Route('post', '/login')
    async loginUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
    
            // 1. Validate input
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }
    
            // 2. Find user by email
            const user = await Users.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
    
            // 3. Check if the password matches
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid password' });
            }
    
            // // 4. Generate a JWT token
            // const token = jwt.sign(
            //     { id: user._id, email: user.email },
            //     process.env.JWT_SECRET || 'your_jwt_secret',
            //     { expiresIn: '1h' }
            // );
    
            // 5. Send the token as a response
            return res.status(200).json({ message: 'User logged in'});
        } catch (error) {
            console.error('Login error:', error);
            return res.status(500).json({ error: 'An error occurred during login' });
        }
    }

    @Route('get', '/get/all')
    @MongoGetAll(Users)
    getAllUsers(req: Request, res: Response) {
        console.log('Get all users');
        return res.status(200).json(req.mongoGetAll);
    }

    @Route('get', '/get/:id') 
    // @MongoGet(Users)
    getUserById(req: Request, res: Response) {
        return res.status(200).json(req.mongoGet);
    }

    @Route('post', '/create')
    @MongoCreate(Users)
    createUser(req: Request, res: Response) {
        return res.status(200).json(req.mongoCreate);
    }

    @Route('put', '/update/:id')
    // @MongoUpdate(Users)
    updateUser(req: Request, res: Response) {
        return res.status(200).json(req.mongoUpdate);
    }

    @Route('delete', '/delete/:id')
    // @MongoDelete(Users)
    deleteUser(req: Request, res: Response) {
        return res.status(200).json({message: 'User deleted'});
    }
}