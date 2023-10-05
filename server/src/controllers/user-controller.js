import User from "../model/user-model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (users.length < 1) {
      return res.status(400).json({
        message: "No Users found!",
      });
    }

    return res.status(200).json({
      data: users,
    });
  } catch (e) {
    console.log(e);
  }
};

export const userSignUp = async (req, res, next) => {
  const { email } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: `User with email: ${email} already Exists!`,
      });
    }
  } catch (e) {
    console.log(e);
  }

  try {
    const { password, ...rest } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const newUser = await User.create({ password: hashedPassword, ...rest });

    res.status(201).json({
      message: "User successfully created!",
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "An error occurred!",
    });
  }
};

export const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    const isPasswordCorrect = bcrypt.compareSync(password, userExists.password);

    if (!userExists) {
      return res.status(400).json({
        message: "User does not exists",
      });
    }

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Incorrect Password!",
      });
    }

    return res.status(200).json({
      message: "Logged in successfully.",
      isLoggedIn: true,
    });
  } catch (e) {
    console.log(e);
  }
};
