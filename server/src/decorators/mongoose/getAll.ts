import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';

export function MongoGetAll(model: Model<any>) {
    return function (target : any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const data = await model.find();

                const transformedData = data.map((item) => {
                    if (item.image && Buffer.isBuffer(item.image)) {
                        return {
                            ...item.toObject(),  // Convert mongoose document to plain object
                            image: `data:image/jpeg;base64,${item.image.toString('base64')}`
                        };
                    }
                    return item;
                });

                req.mongoGetAll = transformedData;
                console.log('Fetched data:', data);
            } catch (error) {
                return res.status(500).json({message: 'Internal server error'});
            }

            return originalMethod.call(this, req, res, next);
        }

        return descriptor;
    }
}