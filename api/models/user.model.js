import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
// The user.model.js file is where we define the schema for our user model. We use Mongoose to create a new schema and then create a model from that schema. We then export the model so that we can use it in other parts of our application.
