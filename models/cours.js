import mongoose from 'mongoose';

const CoursSchema = new mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    type:{
        type:String ,
        required:true
    },
    auteur:{
        type:String ,
        required:true
    },
    desc:{
        type:String ,
        required:false
    },
    link:{
        type:String ,
        required:false
    },
    prix:{
        type:Number,
        required:true

    }
});
export default mongoose.model("Cours",CoursSchema)