import express  from 'express';
import mongoose from 'mongoose'


import { loginValidation, registerValidation, updateValidation } from './validations/auth.js';
import { postCreateValidation } from './validations/post.js';
import {userAuth, adminAuth} from './utils/checkAuth.js';
import {register, login, getMe, updateMe} from './controllers/UserController.js'
import {createPost, getAllPosts} from './controllers/PostController.js'
mongoose.connect(
    'mongodb+srv://yatskiv:shoehut@cluster0.qyrveaz.mongodb.net/shoehut?retryWrites=true&w=majority')
    .then(() => console.log("DB connect"))
    .catch((err) => console.log("DB error: ", err));

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation, register);
app.post('/auth/login', loginValidation, login);
app.get('/auth/me', userAuth, getMe);
app.patch('/auth/update', userAuth, updateValidation, updateMe);

app.post('/posts', adminAuth, postCreateValidation, createPost);
app.get('/posts', getAllPosts);
app.get('/posts/:id');
app.delete('/posts/:id');
app.patch('posts/:id');

app.listen(4000, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server start');
});

