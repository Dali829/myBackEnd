import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type:String ,
        required:true,
        unique:true
    },
    email:{
        type:String ,
        required:true,
        unique:true

    },
    password:{
        type:[String] ,
        
    },
    image:{
        type:String,
        default:""
    },
    wallet:{
        type:Number ,
        default:0
        
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    Role:{
        type:String ,
        default:"user"
    }
},{timestamps:true});
export default mongoose.model("User",UserSchema)




