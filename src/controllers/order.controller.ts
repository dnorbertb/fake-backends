import { Request, Response } from 'express';
import IQueryError from "../types/IQueryError";
import * as service from '../services/order.service';
import { getCartById } from '../services/cart.service';
import { fakeCart } from '../_dummy/fakeCart';

const addCart = async (req: Request, res: Response) => {
    try {
        const { cartId, paymentSuccessfull } = req.body;
        const cart = await getCartById(cartId);
        const response = await service.addNewOrder({ cart: cart ? cart : { ...fakeCart, id: cartId }, paymentSuccessfull });
        res.status(201).json({ data: response });
    } catch (error) {
        const err = error as IQueryError
        if (err.code != 11000) {
            console.log(error);
        }
        if (err.code === 11000) {
            res.status(409).json({ error: "Conflict" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

const getOneById = async (req: Request, res: Response) => {
    try {
        const response = await service.getOrderById(req.params.id);

        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(404).json({ error: "Resource not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const updateCart = async (req: Request, res: Response) => {
    try {
        const updateDate = new Date().getTime();
        const response = await service.updateExistingOrder({ updateDate, ...req.body });
        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(404).json({ error: "Resource not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const deleteCart = async (req: Request, res: Response) => {
    try {
        const response = await service.deleteSingleOrder();
        if (response) {
            res.status(200).json({ success: true });
        } else {
            res.status(404).json({ error: "Resource not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export {
    addCart,
    updateCart,
    deleteCart,
    getOneById,
}