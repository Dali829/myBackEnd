import express  from "express";

import { createTest, deleteTest, getAllTest, getTest, updateTest } from "../controllers/test.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createTest);

router.get("/",getAllTest);

router.get("/:id",getTest);

router.put("/:id"/*,verifyAdmin*/,updateTest);

router.delete("/:id"/*,verifyAdmin*/,deleteTest);


export default router