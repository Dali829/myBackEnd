import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createReservation, getAllReservations, getReservationsByClient } from "../controllers/reservation.js";

const router = express.Router();

router.post("/"/*,verifyAdmin*/,createReservation);

router.get("/",getAllReservations);


router.get("/:id",getReservationsByClient);




export default router