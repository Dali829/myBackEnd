import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    idTest:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test"
    },
    desc:{
        type:String ,
        required:true
    },
    response: { 
        type:Boolean,
        required:true
        
     }

});
export default mongoose.model("Question",QuestionSchema)