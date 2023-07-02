import express from "express";
const router = express.Router();
import * as orderController from "../controllers/order.controller";


router.post('/create',
    orderController.addOrder
);

router.get('/get/:id',
    orderController.getOneById
);

router.patch('/update/:id',
    orderController.updateOrder
);

router.delete('/delete/:id',
    orderController.deleteOrder
);

export default router;