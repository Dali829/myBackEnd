import test from "../models/test.js";
import User from "../models/User.js";


export const createTest = async (req,res,next)=>{
    const newTest = new test(req.body)
    try{
    const saveTest = await newTest.save()
    res.status(200).json(saveTest)
    }
    catch(err){
        next(err);
    }

}
export const updateTest = async (req,res,next)=>{
    try{
        const updateTest = await test.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateTest)
        }
    catch(err){
        next(err);
    }

}
export const getTest = async (req,res,next)=>{
    try{
        const Test = await test.findById(req.params.id).populate("idCours")
        res.status(200).json(Test)
        }
    catch(err){
        next(err);
    }

}
export const deleteTest = async (req,res,next)=>{
    try{
        await test.findByIdAndDelete(req.params.id)
       res.status(200).json(updateTest)
       }
    catch(err){
        next(err);
    }

}
export const getAllTest = async (req,res,next)=>{
    const failed = true;
    try{
    const tests = await test.find().populate("idCours")
    res.status(200).json(tests)
    }
    catch(err){
        next(err);
    }

}

export const getAllTestAp = async (req,res,next)=>{
    const failed = true;
    const userId = req.params.id;
    const user = await User.findById(userId);

    const courseIds = user.listCours;
    try{
    const tests = await test.find({ idCours: { $in: courseIds } }).populate("idCours")
    res.status(200).json(tests)
    }
    catch(err){
        next(err);
    }

}
