import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    date:{
        type:String ,
        required:true
    },
    prix:{
        type:Number ,
        required:true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
     },
     velo: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Velo"
     }
});
export default mongoose.model("Reservation",ReservationSchema)