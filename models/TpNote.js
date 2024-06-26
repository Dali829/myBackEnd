import mongoose from 'mongoose';

const TPSNoteSchema = new mongoose.Schema({
    idTp:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TPS"
    },
    note: { 
        type: Number,
        
     },
     idUser: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
     }

});
export default mongoose.model("TPSNote",TPSNoteSchema)