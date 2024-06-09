import express  from "express";

import { createQuestion, deleteQuestion, getAllQuestion, getQuestion, updateQuestion } from "../controllers/question.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createQuestion);

router.get("/",getAllQuestion);

router.get("/:id",getQuestion);

router.put("/:id"/*,verifyAdmin*/,updateQuestion);

router.delete("/:id"/*,verifyAdmin*/,deleteQuestion);


export default router