import express  from "express";

import { createTp, deleteTp, getAllTps, getAllTpsAp, getTPs, updateTp } from "../controllers/TpNote.js";

const router = express.Router();

router.get("/apprenat/:id",getAllTpsAp);


router.post("/"/*,verifyAdmin*/,createTp);

router.get("/",getAllTps);

router.get("/:id",getTPs);

router.put("/:id"/*,verifyAdmin*/,updateTp);

router.delete("/:id"/*,verifyAdmin*/,deleteTp);


export default router