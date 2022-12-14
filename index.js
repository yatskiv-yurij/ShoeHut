import express  from 'express';
import mongoose from 'mongoose'
import multer from 'multer';
import cors from 'cors';

import { loginValidation, registerValidation, updateValidation } from './validations/auth.js';
import { postCreateValidation } from './validations/post.js';
import { commentCreateValidation } from './validations/comment.js';

import { userAuth, adminAuth } from './utils/checkAuth.js';
import { storage, saveImages, deleteImages } from './utils/images.js';

import {register, login, getMe, updateMe} from './controllers/UserController.js';
import {createPost, getAllPosts, getOnePost, updatePost, deletePost} from './controllers/PostController.js';
import {createOrder, getAllOrder, getClientOrder, updateStatusOrder} from './controllers/OrderController.js';
import {createComment, getProductComment} from './controllers/CommentController.js';

mongoose.connect(
    'mongodb+srv://yatskiv:shoehut@cluster0.qyrveaz.mongodb.net/shoehut?retryWrites=true&w=majority')
    .then(() => console.log("DB connect"))
    .catch((err) => console.log("DB error: ", err));

const app = express();

const upload = multer({storage});    

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post('/auth/register', registerValidation, register);
app.post('/auth/login', loginValidation, login);
app.get('/auth/me', userAuth, getMe);
app.patch('/auth/update', userAuth, updateValidation, updateMe);

app.post('/posts', adminAuth, postCreateValidation, createPost);
app.get('/posts', getAllPosts);
app.get('/posts/:id', getOnePost);
app.patch('/posts/:id', adminAuth, postCreateValidation, updatePost);
app.delete('/posts/:id', adminAuth, deletePost);


app.post('/order', userAuth, createOrder);
app.get('/order', adminAuth, getAllOrder);
app.get('/order/me', userAuth, getClientOrder);
app.patch('/order/:id', adminAuth, updateStatusOrder);

app.post('/comment/:id', userAuth, commentCreateValidation, createComment);
app.get('/comment/:id', getProductComment);

app.post('/upload', adminAuth, upload.any(), saveImages);
app.delete('/upload', adminAuth, deleteImages)

app.listen(4000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server start');
});

