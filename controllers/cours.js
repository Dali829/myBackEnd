import cours from "../models/cours.js";
import User from "../models/User.js";

export const createCours = async (req,res,next)=>{
    const newCours = new cours(req.body)
    try{
    const saveCours = await newCours.save()
    res.status(200).json(saveCours)
    }
    catch(err){
        next(err);
    }

}
export const updateCours = async (req,res,next)=>{
    try{
        const updateCours = await cours.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateCours)
        }
    catch(err){
        next(err);
    }

}
export const getCours = async (req,res,next)=>{
    try{
        const Cours = await cours.findById(req.params.id)
        res.status(200).json(Cours)
        }
    catch(err){
        next(err);
    }

}
export const deleteCours = async (req,res,next)=>{
    try{
        await cours.findByIdAndDelete(req.params.id)
       res.status(200).json(updateCours)
       }
    catch(err){
        next(err);
    }

}


export const getAllCours = async (req,res,next)=>{
    const failed = true;
    try{
    const desCours = await cours.find()
    res.status(200).json(desCours)
    }
    catch(err){
        next(err);
    }

}


export const getAllCoursAP = async (req,res,next)=>{
    
    const failed = true;
    const userId = req.params.id;
    const user = await User.findById(userId);

    const courseIds = user.listCours;
    try{
    const desCours = await cours.find({ _id: { $in: courseIds } })
    res.status(200).json(desCours)
    }
    catch(err){
        next(err);
    }

}