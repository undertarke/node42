import express from "express";
import { getUser, login, loginFacebook, signUp } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.get("/get-user",getUser)

// signup
userRouter.post("/sign-up",signUp)
// login
userRouter.post("/login",login)

// login facebook
userRouter.post("/login-facebook",loginFacebook)



export default userRouter