import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
    idCours:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cours"
    },
    titre:{
        type:String ,
        required:true
    },
    note: { 
        type: Number,
        
     },
     auteur: { 
        type:String ,
     },
     desc: { 
        type:String ,
     },
     

});
export default mongoose.model("Test",TestSchema)