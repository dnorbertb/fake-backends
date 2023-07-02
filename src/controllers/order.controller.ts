import { Request, Response } from 'express';
import IQueryError from "../types/IQueryError";
import md5 from 'md5';
import * as service from '../services/order.service';

const addOrder = async (req: Request, res: Response) => {
    try {
        const id = md5(JSON.stringify(req.body) + new Date().getTime());
        const response = await service.addNewOrder({ id, ...req.body });
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

const updateOrder = async (req: Request, res: Response) => {
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

const deleteOrder = async (req: Request, res: Response) => {
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
    addOrder,
    updateOrder,
    deleteOrder,
    getOneById,
}