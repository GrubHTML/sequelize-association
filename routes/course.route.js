import express from "express";
export const courseRouter = express.Router();

import { createCourse } from "../controllers/course.controller.js";
courseRouter.post("/create-course", createCourse);
