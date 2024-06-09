import express from "express";
import { login, loginFacebook, signUp } from "../controllers/userController.js";


const userRouter = express.Router();

// signup
userRouter.post("/sign-up",signUp)
// login
userRouter.post("/login",login)

// login facebook
userRouter.post("/login-facebook",loginFacebook)



export default userRouter