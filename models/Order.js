import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products:[ new mongoose.Schema({
        id_product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        count: {
            type: String,
            required: true,
        },
    })],
    status:{
        type: String,
        required: true,
    }
},
{
    timestamps: true,
}
);

export default mongoose.model('Order', OrderSchema);