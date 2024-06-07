import mongoose from 'mongoose';

const AbnmSchema = new mongoose.Schema({
    idCours:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cours"
    },
   prix: { 
        type: Number,
        
     }
     

});
export default mongoose.model("Abnm",AbnmSchema)