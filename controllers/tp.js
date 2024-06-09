import tps from "../models/tp.js";

export const createTp = async (req,res,next)=>{
    const newTp = new tps(req.body)
    try{
    const saveTp = await newTp.save()
    res.status(200).json(saveTp)
    }
    catch(err){
        next(err);
    }

}
export const updateTp = async (req,res,next)=>{
    try{
        const updateTp = await tps.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateTp)
        }
    catch(err){
        next(err);
    }

}
export const getTPs = async (req,res,next)=>{
    try{
        const tpss = await tps.findById(req.params.id).populate("idCours")
        res.status(200).json(tpss)
        }
    catch(err){
        next(err);
    }

}
export const deleteTp = async (req,res,next)=>{
    try{
        await tps.findByIdAndDelete(req.params.id)
       res.status(200).json(updateTp)
       }
    catch(err){
        next(err);
    }

}
export const getAllTps = async (req,res,next)=>{
    const failed = true;
    try{
    const desTp = await tps.find().populate("idCours")
    res.status(200).json(desTp)
    }
    catch(err){
        next(err);
    }

}
