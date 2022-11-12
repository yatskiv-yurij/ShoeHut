import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    count_star: {
        type: Number,
    }
},
{
    timestamps: true,
});

export default mongoose.model("Comment", CommentSchema);