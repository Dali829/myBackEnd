import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type:String ,
        required:true,
    },
    userLastname:{
        type:String ,
        required:true,
    },
    email:{
        type:String ,
        required:true,
        unique:true

    },
    age:{
        type:Number ,
        required:true,

    },
    password:{
        type:[String] ,
        
    },
    Role:{
        type:String ,
        default:"user"
    }
},{timestamps:true});
export default mongoose.model("User",UserSchema)




