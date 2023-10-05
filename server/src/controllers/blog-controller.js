import Blog from "../model/blog-model.js";

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length < 1) {
      return res.status(400).json({
        message: "No blogs found!",
      });
    }

    return res.status(200).json({
      data: blogs,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSingleBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).json({
        message: "No blog found with this id!",
      });
    }

    return res.status(200).json({
      data: blog,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const newBlog = await Blog.create(req.body);

    return res.status(201).json({
      data: {
        blog: newBlog,
        message: "Blog successfully Created.",
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Some error occurred.",
    });
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    let updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(500).json({
        message: `Unable to update blog`,
      });
    }

    return res.status(200).json({
      data: updatedBlog,
      message: "Blog updated successfully.",
    });
  } catch (e) {
    return res.status(500).json({
      message: "Some error occurred.",
    });
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    let deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deleteBlog) {
      return res.status(500).json({
        message: "Unable to delete the blog.",
      });
    }

    return res.status(200).json({
      message: "Successfully deleted the blog.",
    });
  } catch (e) {
    return res.status(500).json({
      message: "Some error occurred.",
    });
  }
};
