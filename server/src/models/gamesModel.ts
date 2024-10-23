import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    image: {
        type: Buffer, 
    },
});

export const Games = mongoose.model('games', gameSchema);