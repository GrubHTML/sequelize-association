import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import { sequelize } from "./config/dbConnection.js";
const PORT = process.env.port;

// models
import "./models/user.model.js";
import "./models/profile.model.js";
import "./models/cart.model.js";
import "./models/course.model.js";
import "./models/association.js";
//routes
import { userRouter } from "./routes/user.routes.js";
import { postRouter } from "./routes/post.route.js";
import { courseRouter } from "./routes/course.route.js";
//middlewares

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", courseRouter);

// DB Connection
const dbConnection = async () => {
  try {
    await sequelize.sync({ alter: false });
    console.log("Connection has been successfully established");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};
dbConnection();
// server running
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello Server");
});
