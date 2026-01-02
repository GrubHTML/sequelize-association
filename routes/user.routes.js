import express from "express";
export const userRouter = express.Router();

import {
  createUser,
  getOneUser,
  loginUser,
} from "../controllers/user.controller.js";

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/getuser/:id", getOneUser);
