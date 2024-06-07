import mongoose from 'mongoose';

const TPSSchema = new mongoose.Schema({
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
     linkEnonce: { 
        type:String ,
     },
     auteur: { 
        type:String ,
     },
     desc: { 
        type:String ,
     },
     linkDepot: { 
        type:String ,
     },

});
export default mongoose.model("TPS",TPSSchema)