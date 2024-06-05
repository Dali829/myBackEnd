import express  from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin,verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentification",verifyToken,(req,res,next)=>{
//     res.send("Hello User, you are logged in!")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, you are not logged in and you can delete your account")
// })



// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

router.put("/:id"/*, verifyUser*/,updateUser);

router.delete("/:id"/*, verifyUser*/,deleteUser);

router.get("/:id"/*, verifyUser*/,getUser);

router.get("/"/*,verifyAdmin*/,getAllUser);

export default router