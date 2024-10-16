import mongoose from 'mongoose';

const dbURI = "mongodb+srv://admin:5lWFzED2z5L5WxdV@cluster0.gltai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
    try {
        await mongoose.connect(dbURI)
        .then(() => console.log('Connected to MongoDB'))
    }
    catch(err) {
        console.log(err);
    }
}