import express from "express";
const router = express.Router();
import * as cartController from "../controllers/cart.controller";


router.post('/create',
    cartController.addCart
);

router.get('/get/:id',
    cartController.getOneById
);

router.patch('/update/:id',
    cartController.updateCart
);

router.delete('/delete/:id',
    cartController.deleteCart
);

export default router;