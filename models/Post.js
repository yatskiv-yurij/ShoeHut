import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    color:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    article:{
        type: String,
        required: true, 
    },
    material_top: {
        type: String,
        required: true,
    },
    material_substrate: {
        type: String,
        required: true,
    },
    material_sole: {
        type: String,
        required: true,
    },
    season: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        default: [],
    },
    sizes: {
        type: Array,
        default: [],
    }    
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Post', PostSchema);