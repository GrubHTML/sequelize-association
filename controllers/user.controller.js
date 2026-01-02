import { Cart } from "../models/cart.model.js";
import { Course } from "../models/course.model.js";
import { Post } from "../models/post.model.js";
import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create(
      {
        username,
        email,
        password,
        Profile: { bio: "amar nam nira, khai boshe chira." },
        Cart: {
          quantity: 10,
        },
      },
      { include: [Profile, Cart] }
    );
    const { password: _, ...safeUser } = user.toJSON();
    return res.status(200).json(safeUser);
  } catch (error) {
    // console.log(error);
    return res.status(500).json("internal server error", error);
  }
};
export const loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json("user not found");
    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({ user, accessToken });
  } catch (error) {
    return res.status(500).json("internal server error", error);
  }
};

export const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Profile }, { model: Post }, { model: Course }],
    });
    if (!user) return res.status(401).json({ mesage: "user not found" });
    return res.status(500).json(user);
  } catch (error) {
    return res.status(500).json("internal server error", error);
  }
};
export const courseEnrollment = async (req, res) => {
  const { courseId } = req.body;
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "Unauthorized" });
    const course = await Course.findByPk(courseId);
    if (!course) return res.status(404).json({ mesage: "Course not found" });
    await user.addCourse(course);
    return res.status(200).json({ mesgae: "Enrollment successfull" });
  } catch (error) {
    return res.status(500).json("internal server error", error);
  }
};
