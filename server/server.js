import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./src/routes/user-routes";

const app = express();
const PORT = 8000;

app.use("/api/v1", router);

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
