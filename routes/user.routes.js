import express from "express";
export const userRouter = express.Router();

import {
  courseEnrollment,
  createUser,
  getOneUser,
  loginUser,
} from "../controllers/user.controller.js";
import { checkLogin } from "../middlewares/auth.middleware.js";

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/getuser/:id", getOneUser);
userRouter.post("/course-enroll", checkLogin, courseEnrollment);
