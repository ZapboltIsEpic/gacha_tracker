import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';

export function MongoGetAll(model: Model<any>) {
    return function (target : any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const data = await model.find();
                req.mongoGetAll = data;
                console.log('Fetched data:', data);
            } catch (error) {
                return res.status(500).json({message: 'Internal server error'});
            }

            return originalMethod.call(this, req, res, next);
        }

        return descriptor;
    }
}