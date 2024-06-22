import express  from "express";

import { createTest, deleteTest, getAllTest, getAllTestAp, getTest, updateTest } from "../controllers/test.js";

const router = express.Router();
router.get("/apprenat/:id",getAllTestAp);


router.post("/"/*,verifyAdmin*/,createTest);

router.get("/",getAllTest);

router.get("/:id",getTest);

router.put("/:id"/*,verifyAdmin*/,updateTest);

router.delete("/:id"/*,verifyAdmin*/,deleteTest);


export default router