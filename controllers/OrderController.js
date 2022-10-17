import OrderModel from '../models/Order.js';

export const createOrder = async(req,res) => {
    try {
        const doc = new OrderModel({
            client: req.userId,
            products: req.body.products,
            status: "оформляється",
        });

        const order = await doc.save();

        res.json({
            ...order._doc,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося створити замовлення',
        });
    }
}


export const getAllOrder = async (req, res) => {
    try {
        const orders = await OrderModel.find().populate(['client', 'products.product']).exec();
        res.json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося отримати замовлення клієнтів',
        });
    }
}

export const getClientOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await OrderModel.find({
            client: userId,
        }).populate('products.product').exec();
        res.json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося отримати замовлення',
        });
    }
}