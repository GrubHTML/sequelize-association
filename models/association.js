import { User } from "./user.model.js";
import { Profile } from "./profile.model.js";
import { Cart } from "./cart.model.js";
import { Post } from "./post.model.js";
import { Course } from "./course.model.js";

// one to one => association relationship
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

// one to many => association relationship
User.hasMany(Post);
Post.belongsTo(User, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// many to many => association relationship
User.belongsToMany(Course, { through: "UserCourses" });
Course.belongsToMany(User, { through: "UserCourses" });
