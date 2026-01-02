import { Post } from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({ title, content, UserId: req.user.id });
    return res.status(200).json({ message: "Post created successfully", post });
  } catch (error) {
    return res.status(500).json("internal server error", error);
  }
};
