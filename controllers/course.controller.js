import { Course } from "../models/course.model.js";

export const createCourse = async (req, res) => {
  const { reqtitle } = req.body;
  try {
    if (!reqtitle)
      return res.status(401).json({ message: "Invalid credentials" });
    const course = await Course.create({ title: reqtitle });

    return res.status(200).json({ message: "Course created", course });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};
