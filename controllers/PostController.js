import { validationResult } from 'express-validator';

import PostModel from '../models/Post.js';

export const create = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }

        const doc = new PostModel({
            title: req.body.title,
            brand: req.body.brand,
            type: req.body.type,
            color: req.body.color,
            price: req.body.price,
            description: req.body.description,
            article: req.body.article,
            material_top: req.body.material_top,
            material_substrate: req.body.material_substrate,
            material_sole: req.body.material_sole,
            season: req.body.season,
            country: req.body.country,
            images: req.body.images,
            sizes: req.body.sizes,
        });

        const post = await doc.save();

        res.json({
            ...post._doc,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося створити товар',
        })
    }
}