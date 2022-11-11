import multer from "multer";
import fs from 'fs';

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

export const saveImages = (req, res) => {
    try {
        const images_path = []
        for(let key of req.files){
            images_path.push(`\\${key.path}`);
        }
        
        res.json([
            ...images_path
        ]);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося зберегти картинки товару',
        });
    }
};

export const deleteImages = (req, res) => {
    try {
        
        const files = req.query.images;
        files.forEach(path => fs.unlinkSync("." + path));
        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Картинки товару не були видалені',
        });
    }
}

