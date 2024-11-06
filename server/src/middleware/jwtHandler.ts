import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export function jwtAuth(req: Request, res: Response, next: NextFunction) {
    // Retrieve token from Authorization header (e.g., Bearer token)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token missing or malformed' });
    }

    const token = authHeader.split(' ')[1];  // Extract the token part
    try {
        // Verify the token and get the payload
        if (!JWT_SECRET_KEY) {
            return res.status(500).json({ message: 'JWT secret key is not defined' });
        }
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        req.user = decoded;  // Attach the decoded payload (e.g., user data) to req.user
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}