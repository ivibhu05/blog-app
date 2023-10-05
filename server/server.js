import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./src/routes/user-routes.js";
import blogRouter from "./src/routes/blog-routes.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);

mongoose
  .connect(
    process.env.DATABASE_URL.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    )
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  })
  .then(() => {
    console.log("Mongo Connected!");
  })
  .catch((e) => {
    console.log(e);
  });
