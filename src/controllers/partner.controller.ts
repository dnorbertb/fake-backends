import { Request, Response } from 'express';
import IQueryError from "../types/IQueryError";
import * as service from '../services/partner.service';


const addPartner = async (req: Request, res: Response) => {
    try {
        const response = await service.saveNewPartner(req.body);
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

const getOneByIdentifier = async (req: Request, res: Response) => {
    try {
        console.log(req.params.identifier)
        const response = await service.getOneByName(req.params.identifier);

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

const updatePartner = async (req: Request, res: Response) => {
    try {
        const response = await service.updateExistingPartner(req.body);
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

const deletePartner = async (req: Request, res: Response) => {
    try {
        const response = await service.deleteSinglePartner();
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
    addPartner,
    updatePartner,
    deletePartner,
    getOneByIdentifier,
}