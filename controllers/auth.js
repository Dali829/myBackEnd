import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Jwt  from "jsonwebtoken";
import { createError } from "../utils/errors.js";

export const registre = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            userLastname:req.body.userLastname,
            age:req.body.age,
            Role:req.body.Role
        })
        await newUser.save()
        res.status(200).send("User has been created")
    }catch(err){
        next(err)
    }
}

export const login = async(req,res,next)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"Wrong password or username!"));
         
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password.toString())
        if(!isPasswordCorrect) return next(createError(400,"User not found!"))
        const token = Jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
        const {password ,isAdmin, ...otherDetails}= user._doc;
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({...otherDetails})
    }catch(err){
        next(err)
    }
}