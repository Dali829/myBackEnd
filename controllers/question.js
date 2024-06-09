import question from "../models/question.js";

export const createQuestion = async (req,res,next)=>{
    const newTest = new question(req.body)
    try{
    const saveTest = await newTest.save()
    res.status(200).json(saveTest)
    }
    catch(err){
        next(err);
    }

}
export const updateQuestion = async (req,res,next)=>{
    try{
        const updateQuestion = await question.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateQuestion)
        }
    catch(err){
        next(err);
    }

}
export const getQuestion = async (req,res,next)=>{
    try{
        const Test = await question.findById(req.params.id).populate("idTest")
        res.status(200).json(Test)
        }
    catch(err){
        next(err);
    }

}
export const deleteQuestion = async (req,res,next)=>{
    try{
        await question.findByIdAndDelete(req.params.id)
       res.status(200).json(updateQuestion)
       }
    catch(err){
        next(err);
    }

}
export const getAllQuestion = async (req,res,next)=>{
    const failed = true;
    try{
    const tests = await question.find().populate("idTest")
    res.status(200).json(tests)
    }
    catch(err){
        next(err);
    }

}
