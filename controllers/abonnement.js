import abnm from "../models/abonnement.js";

export const createAbnm = async (req,res,next)=>{
    const newAbnm = new abnm(req.body)
    try{
    const saveAbnm = await newAbnm.save()
    res.status(200).json(saveAbnm)
    }
    catch(err){
        next(err);
    }

}
export const updateAbnm = async (req,res,next)=>{
    try{
        const updateAbnm = await abnm.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateAbnm)
        }
    catch(err){
        next(err);
    }

}
export const getAbnm = async (req,res,next)=>{
    try{
        const Abnm = await abnm.findById(req.params.id)
        res.status(200).json(Abnm)
        }
    catch(err){
        next(err);
    }

}
export const deleteAbnm = async (req,res,next)=>{
    try{
        await abnm.findByIdAndDelete(req.params.id)
       res.status(200).json(updateAbnm)
       }
    catch(err){
        next(err);
    }

}
export const getAllAbnm = async (req,res,next)=>{
    const failed = true;
    try{
    const Abnms = await abnm.find().populate("idCours")
    res.status(200).json(Abnms)
    }
    catch(err){
        next(err);
    }

}
