import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

const protect = asyncHandler(async(req,res,next)=>{
let token;
token = req.cookies.jwt;//userID is part of the token 
if(token){
try{
//decoded is an object with userId field
const decoded = jwt.verify(token,process.env.JWT_SECRET)
//we add to the req object the user
 req.user = await User.findById(decoded.userId).select('-password')
 // ANOTHER WAY
// const user =await User.findOne({userId:decoded.userId}).select('-password')
// req.user=user
next()
}catch(err){
console.log(err)
res.status(401);
throw new Error('Not authorized,token failed')
}

}else{
 res.status(401);
 throw new Error('Not authorized, no token')
}
})
// User must be an admin
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error('Not authorized as an admin');
    }
  };
export {protect,admin}