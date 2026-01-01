import { User } from "./user.model.js";
import { Profile } from "./profile.model.js";
import { Cart } from "./cart.model.js";

// one to one
User.hasOne(Profile, {
  // foreignKey: "userId" -- this is for manual creation of userId and without this is SQL will automatically create this UserId.
  // onDelete: "CASCADE",
  // onUpdate: "CASCADE",
});
Profile.belongsTo(User, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasOne(Cart);
Cart.belongsTo(User, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
