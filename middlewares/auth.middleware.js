import jwt from "jsonwebtoken";

export const checkLogin = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json("authorization not provided");
  if (!authorization.startsWith("Bearer"))
    return res.status(401).json("invalid authorization");
  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded items", decoded);
    req.user = {
      id: decoded.id,
    };
    next();
  } catch (error) {
    return res.status(400).json("Invalid token", error);
  }
};
