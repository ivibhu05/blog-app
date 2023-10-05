import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
} from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.route("/").get(getAllBlogs).post(createBlog);
blogRouter.route("/:id").get(getSingleBlog).put(updateBlog).delete(deleteBlog);

export default blogRouter;
