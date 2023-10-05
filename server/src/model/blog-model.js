import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, "A blog title is required"],
    maxLength: 20,
  },
  description: {
    type: String,
    required: [true, "Blog description is required"],
    maxLength: 2000,
  },
  cover_image: {
    type: String,
  },
  user: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Blog", blogSchema);
