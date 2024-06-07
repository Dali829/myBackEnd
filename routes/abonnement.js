import express  from "express";

import { createAbnm, deleteAbnm, getAbnm, getAllAbnm,  updateAbnm } from "../controllers/abonnement.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createAbnm);

router.get("/",getAllAbnm);

router.get("/:id",getAbnm);

router.put("/:id"/*,verifyAdmin*/,updateAbnm);

router.delete("/:id"/*,verifyAdmin*/,deleteAbnm);


export default router