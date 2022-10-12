import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    lastname: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
},
);

export default mongoose.model('User', UserSchema);