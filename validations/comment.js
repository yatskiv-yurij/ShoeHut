import { body } from 'express-validator';

export const commentCreateValidation =[
    body('data', "Введіть більше інформації").isLength({ min: 30 }),
];