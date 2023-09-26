import User from "../model/user-model";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    const users = await User.find();
  } catch (e) {
    console.log(e);
  }
  if (!users) {
    return res.status(400).json({
      message: "No Users found!",
    });
  }
  return res.status(200).json({
    message: "Success!",
    data: users,
  });
};
