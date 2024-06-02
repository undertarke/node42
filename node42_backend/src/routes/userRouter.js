import express from "express";
import { login, signUp } from "../controllers/userController.js";


const userRouter = express.Router();

// signup
userRouter.post("/sign-up",signUp)
// login
userRouter.post("/login",login)


export default userRouter