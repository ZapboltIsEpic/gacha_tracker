import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';

export function imageHandler (req : Request, res : Response, next : NextFunction) {
    const multer = require('multer');
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    next();
}