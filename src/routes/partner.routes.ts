import express from "express";
const router = express.Router();
import * as partnerController from "../controllers/partner.controller";

// router.post('/add',
//     partnerController.addPartner
// );

// router.patch('/update/:id',
//     partnerController.updatePartner
// ); 


// router.delete('/delete/:id',
//     partnerController.deletePartner
// );

router.get('/get/:identifier',
    partnerController.getOneByIdentifier
);


export default router;