import mongoose from 'mongoose';

const dbURI = "mongodb+srv://admin:5lWFzED2z5L5WxdV@cluster0.gltai.mongodb.net/gachatrackerdb?retryWrites=true&w=majority&appName=Cluster0";

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