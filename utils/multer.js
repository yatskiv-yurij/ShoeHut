import multer from "multer";

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

export const saveImages = (req, res) => {
    const images_path = []
    for(let key of req.files){
        images_path.push(`\\${key.path}`);
    }
    
    res.json([
        ...images_path
    ]);
};

