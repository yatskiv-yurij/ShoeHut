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