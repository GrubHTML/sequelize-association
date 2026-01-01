import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});
