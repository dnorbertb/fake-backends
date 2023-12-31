import express from "express";
const router = express.Router();
import * as orderController from "../controllers/order.controller";


router.post('/create',
    orderController.addCart
);

router.get('/get/:id',
    orderController.getOneById
);

router.patch('/update/:id',
    orderController.updateCart
);

router.delete('/delete/:id',
    orderController.deleteCart
);

export default router;