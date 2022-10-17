import { validationResult } from 'express-validator';

import PostModel from '../models/Post.js';

export const createPost = async (req, res) => {
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
        });
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const  posts = await PostModel.find();
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося отримати товари',
        });
    }
}

export const getOnePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await PostModel.findOne({
            _id: postId,
        })
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося отримати дані про товар',
        });
    }
}

export const updatePost = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }

        await PostModel.updateOne(
            {
                _id:req.params.id,
            },
            {
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
            },
            function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated Docs : ", docs);
                }
            }
        ).clone();

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося оновити дані товару',
        });
    }
}

export const deletePost = async (req, res) => {
    try {
        await PostModel.deleteOne({ _id: req.params.id});
        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося видалити дані товару',
        });
    }
}