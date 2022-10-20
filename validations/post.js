import { body } from 'express-validator';

export const postCreateValidation = [
    body('title', 'Вкажіть вірну назву товару').isLength({ min: 5}),
    body('price', 'Вкажіть вірний формат ціни').isNumeric(),
    body('color', 'Вкажіть колір взуття').isLength({ min: 3}),
    body('type', 'Вкажіть тип взуття').isLength({ min: 3}),
    body('description', 'Опишіть товар детальніше').isLength({ min: 20}),
    body('images', 'Надайте декілька фото товару').isArray().notEmpty(),
    body('sizes', 'Вкажіть розміри даного товару').isArray().notEmpty(),


    body('brand', 'Вкажіть назву бренду').isLength({ min: 1}),
    body('article', 'Вкажіть артикл').isLength({ min: 1}),
    body('material_top', 'Вкажіть матеріал обуві').isLength({ min: 1}),
    body('material_substrate', 'Вкажіть матеріал підкладки').isLength({ min: 1}),
    body('material_sole', 'Вкажіть матеріал підошви').isLength({ min: 1}),
    body('season', 'Вкажіть сезон').isLength({ min: 1}),
    body('country', 'Вкажіть країну виробник').isLength({ min: 1}),

    body('price', 'Вкажіть вірний формат ціни').optional().isNumeric(),

]