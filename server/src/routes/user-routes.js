import express from "express";
import {
  getAllUsers,
  userLogin,
  userSignUp,
} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", userSignUp);
userRouter.post("/login", userLogin);

export default userRouter;
