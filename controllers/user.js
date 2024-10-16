import { registerUserValidator } from "../validators/user.js"; // Import validator
import { UserModel } from "../models/user.js"; // Import model
import bcrypt from "bcryptjs"; // Import bcrypt


export const registerUser = async (req, res, next) => {
  try {
    // Validate user input
    const { error, value } = registerUserValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    // Check if user already exists
    const user = await UserModel.findOne({ email: value.email });
    if (user) {
      return res.status(409).json("User already exists");
    }
    // Hash password
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    // Save user
    await UserModel.create({ ...value, password: hashedPassword });
    // Send user confirmation email
    // Respond to request with success message
    res.json("User Registered");
  } catch (error) {
    next(error);
  }
};

export const loginUser = (req, res, next) => {
  res.json("User Logged In");
};

export const logoutUser = (req, res, next) => {
  res.json("User Logged Out");
};

export const updateProfile = (req, res, next) => {
  res.json("Profile Updated");
};
