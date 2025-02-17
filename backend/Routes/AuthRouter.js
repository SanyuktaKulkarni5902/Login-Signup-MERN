import { Router } from "express";
import { signupValidation, loginValidation } from "../Middlewares/AuthValidation.js";
import { signup,login } from "../Controllers/AuthController.js";

const router=Router();

router.post('/login',loginValidation,login)

router.post('/signup',signupValidation,signup)

export {router};