import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import { sequelize } from "./config/dbConnection.js";
// models
import "./models/user.model.js";
import "./models/profile.model.js";
import "./models/cart.model.js";
import "./models/association.js";
//routes
import { userRouter } from "./routes/user.routes.js";
const PORT = process.env.port;

app.use(express.json());
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Hello Server");
});

const dbConnection = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been successfully established");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};
dbConnection();
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
