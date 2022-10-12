import { body } from 'express-validator';


export const loginValidation = [
    body('email', 'Невірний формат пошти').isEmail(),
    body('password', 'Пароль повинен бути не менше 5 символів').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Невірний формат пошти').isEmail(),
    body('password', 'Пароль повинен бути не менше 5 символів').isLength({ min: 5 }),
    body('lastname', 'Вкажіть прізвище').isLength({ min: 3 }),
    body('name', 'Вкажіть ім\'я').isLength({ min: 3 }),
    body('phone', 'Вкажіть вірний номер телефону').optional().isLength({min: 13, max: 13}),
];

export const updateValidation = [
    body('email', 'Невірний формат пошти').isEmail(),
    body('password', 'Пароль повинен бути не менше 5 символів').optional().isLength({ min: 5 }),
    body('lastname', 'Вкажіть прізвище').isLength({ min: 3 }),
    body('name', 'Вкажіть ім\'я').isLength({ min: 3 }),
    body('phone', 'Вкажіть вірний номер телефону').optional().isLength({min: 13, max: 13}),
];