import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export const userAuth =  (req, res, next) =>{
    const token = (req.headers.authorization ||  '').replace(/Bearer\s?/, '');

    if(token) {
        try {
           const decoded = jwt.verify(token, 'shoehut'); 

           req.userId = decoded._id;
           next();
        } catch (e) {
            return res.status(403).json({
                message: 'Немає доступу',
            });
        }
    }else{
        return res.status(403).json({
            message: 'Немає доступу',
        });
    }
}

export const adminAuth = async (req, res, next) => {
    const token = (req.headers.authorization ||  '').replace(/Bearer\s?/, '');
    if(token) {
        try {
            const decoded = jwt.verify(token, 'shoehut'); 
            if(decoded.role === "admin"){
                next();
            }else{
                return res.status(403).json({
                    message: 'Немає доступу',
                }); 
            }
        } catch (e) {
            return res.status(403).json({
                message: 'Немає доступу',
            });
        }
    }else{
        return res.status(403).json({
            message: 'Немає доступу',
        });
    }
}