import mongoose from 'mongoose';

const fgoPersonalisedServantSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    servant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fgoservants',
        required: true,
    },
    fous: {
        type: Map<String, Number>,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    bondLevel: {
        type: Number,
        required: true,
    }
});

export const FGOPersonalisedServants = mongoose.model('fgopersonalisedservants', fgoPersonalisedServantSchema);