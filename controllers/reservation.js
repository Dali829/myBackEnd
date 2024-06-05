import reservation from "../models/reservation.js";

export const createReservation = async (req,res,next)=>{
    const newRes = new reservation(req.body)
    try{
    const saveRes = await newRes.save()
    res.status(201).json(saveRes)
    }
    catch(err){
        next(err);
    }

}



export const getAllReservations = async (req,res,next)=>{
    const failed = true;
    try{
    const Reservations = await reservation.find().populate("user").populate("velo")
    res.status(200).json(Reservations)
    }
    catch(err){
        next(err);
    }

}
export const getReservationsByClient = async (req,res,next)=>{
    const failed = true;
    const id = req.params.id;
    try{
    const Reservations = await reservation.find({user:req.params.id}).populate("user").populate("velo")
    res.status(200).json(Reservations)
    }
    catch(err){
        next(err);
    }

}
