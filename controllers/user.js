import User from "../models/User.js";


export const updateUser = async (req,res,next)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateUser)
        }
    catch(err){
        next(err);
    }

}
export const getUser = async (req,res,next)=>{
    try{
        const User1 = await User.findById(req.params.id)
        res.status(200).json(User1)
        }
    catch(err){
        next(err);
    }

}
export const deleteUser = async (req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
       res.status(200).json(updateUser)
       }
    catch(err){
        next(err);
    }

}
export const getAllUser = async (req,res,next)=>{
    const failed = true;
    try{
    const Users = await User.find()
    res.status(200).json(Users)
    }
    catch(err){
        next(err);
    }

}
/*
export const addCourseToUser = async (userId, course) => {
    try {
        await User.updateOne(
            { _id: userId },
            { $push: { listCours: course } }
        );
        res.status(200).json("added")

    } catch (err) {
        console.error('Error adding course:', err);
    }
};*/


export const addCourseToUser = async (req,res,next)=>{
    try{
        const updateAbnm = await User.findByIdAndUpdate(req.params.id, { $push: { listCours: req.body.course } },{new:true})
        res.status(200).json(updateAbnm)
        }
    catch(err){
        next(err);
    }

}