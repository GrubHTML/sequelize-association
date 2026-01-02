import express from "express";
export const postRouter = express.Router();

import { createPost } from "../controllers/post.controller.js";
import { checkLogin } from "../middlewares/auth.middleware.js";

postRouter.post("/create-post", checkLogin, createPost);
