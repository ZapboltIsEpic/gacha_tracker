import mongoose from 'mongoose';

const fgoservantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    class: {
        type: String,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: Buffer, 
    },
    // skills, ascension needed to be added
});

export const FGOServants = mongoose.model('fgoservants', fgoservantSchema);