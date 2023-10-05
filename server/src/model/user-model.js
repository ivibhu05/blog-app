import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "User email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: 6,
  },
});

export default mongoose.model("User", userSchema);
