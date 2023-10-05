import express from "express";
import {
  createBlog,
  getAllBlogs,
  getSingleBlog,
} from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getSingleBlog);
blogRouter.post("/", createBlog);

export default blogRouter;
