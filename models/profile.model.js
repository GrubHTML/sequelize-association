import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const Profile = sequelize.define("Profile", {
  fullname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // userId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   unique: true,
  // },
});
