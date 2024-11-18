import { Request, Response, NextFunction } from 'express';
import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';

export function MongoCreate(model: Model<any>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                // USER REGISTER 
                if (req.body.password) {
                    req.body.password = await bcrypt.hash(req.body.password, 10);
                }

                const data = new model({
                    _id: new mongoose.Types.ObjectId(),
                    ...req.body,
                    image: req.file ? req.file.buffer : undefined
                });

                await data.save();
                req.mongoCreate = data;
                console.log('Created data:', data);
            } catch (error) {
                console.log(error);
                return res.status(400).json(error);
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}