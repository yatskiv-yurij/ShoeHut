import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import UserModel from '../models/User.js';

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            lastname: req.body.lastname,
            name: req.body.name,
            email: req.body.email,
            passwordHash: hash,
            role: "client",
        });

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        },
         "shoehut",
         {
            expiresIn: '30d',
         }
        )

        const {passwordHash, ...userData} = user._doc;

        res.json({
            ...userData,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося зареєструватись',
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if(!user) {
            return res.status(400).json({
                message: "Невірний логін або пароль",
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if(!isValidPass) {
            return res.status(400).json({
                message: "Невірний логін або пароль",
            });
        }

        const token = jwt.sign({
            _id: user._id,
        },
         "shoehut",
         {
            expiresIn: '30d',
         }
        );

        const {passwordHash, ...userData} = user._doc;

        res.json({
            ...userData,
            token,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Не вдалось авторизуватись",
        });
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if(!user) {
            return res.status(404).json({
                message: "Користувач не знайдений",
            });
        }

        const {passwordHash, ...userData} = user._doc;

        res.json({
            ...userData,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Немає доступу",
        });
    }
}

export const updateMe = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }
        console.log(req.userId);
        console.log(req.body);
        await UserModel.updateOne(
            {
                _id: req.userId,
            },
            {
                lastname: req.body.lastname,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
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

        if(req.body.password){
            const password = req.body.password;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            await UserModel.updateOne(
                {
                    _id: req.userId,
                },
                {
                    passwordHash: hash,
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
        }

        res.json({
            success: true,
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не вдаломь оновити дані",
        })
    }
}