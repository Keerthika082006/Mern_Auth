import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup =  async (req,res)=>{
   const{username,email,password}=req.body; //Get the user's input
   const hashedPassword =bcryptjs.hashSync(password, 10); //Hash the password
   const newUser = new User({username,email,password: hashedPassword}); //This creates a new Mongoose document using the User model.

   try{
      await newUser.save() //This is the line that saves the user's details in the database.
      res.status(201).json({message: "User created successfully"});
   }catch(err){
      res.status(500).json({message: "Error creating user", error: err.message});
   }

};