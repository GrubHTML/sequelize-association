import { Cart } from "../models/cart.model.js";
import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";

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
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json("internal server error", error);
  }
};
