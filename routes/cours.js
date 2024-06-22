import express  from "express";
import { createCours, deleteCours, getAllCours, getAllCoursAP, getCours, updateCours } from "../controllers/cours.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/apprenat/:id",getAllCoursAP);

router.post("/"/*,verifyAdmin*/,createCours);

router.put("/:id"/*,verifyAdmin*/,updateCours);

router.delete("/:id"/*,verifyAdmin*/,deleteCours);

router.get("/:id",getCours);

router.get("/",getAllCours);




export default router