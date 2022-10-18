import { validationResult } from 'express-validator';

import CommentModel from '../models/Comment.js';

export const createComment = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }


        const doc = new CommentModel({
            user: req.userId,
            product: req.params.id,
            data: req.body.data,
            count_star: req.body.count_star,
        });

        const comment = await doc.save();

        res.json({
            ...comment._doc,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося створити комментар',
        });
    }
}

export const getProductComment = async(req, res) => {
    try {
        const postId = req.params.id;
        const comments = await CommentModel.find({
            product: postId,
        }).populate('user').exec();

        
        res.json({
            comments,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося отримати комментарі',
        });
    }
}