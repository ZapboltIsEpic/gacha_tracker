import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = process.env.DB_URI;

if (!dbURI) {
    throw new Error('DB_URI is not defined in the environment variables');
}

export const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Connected to MongoDB');

        if (mongoose.connection.db) {
            const currentDB = mongoose.connection.db.databaseName;
            console.log(`You are currently connected to: ${currentDB}`);
        } else {
            console.log('Database connection is undefined');
        }
    }
    catch(err) {
        console.log(err);
    }
}