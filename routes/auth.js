import express  from "express";
import { login, registre } from "../controllers/auth.js";

const router = express.Router();

router.post("/register",registre)
router.post("/login",login)


export default router