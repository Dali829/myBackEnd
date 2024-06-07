import express  from "express";

import { createTp, deleteTp, getAllTps, getTPs, updateTp } from "../controllers/tp.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createTp);

router.get("/",getAllTps);

router.get("/:id",getTPs);

router.put("/:id"/*,verifyAdmin*/,updateTp);

router.delete("/:id"/*,verifyAdmin*/,deleteTp);


export default router