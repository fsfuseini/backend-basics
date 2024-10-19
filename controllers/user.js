import {
    registerUserValidator,
    loginUserValidator,
    updateProfileValidator,
} from "../validators/user.js"; // Import validator
import { UserModel } from "../models/user.js"; // Import model
import bcrypt from "bcryptjs"; // Import bcrypt
import jwt from "jsonwebtoken"; // Import jwt
import { transporter } from "../utils/mail.js";

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
        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: value.email,
            subject: "Account Registration",
            text: "Thank you for registering!",
        })
        // Respond to request with success message
        res.json("User Registered");
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        //  Validate user input
        const { error, value } = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Find one user with identifier
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json("User not found");
        }
        // Compare password
        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword) {
            return res.status(401).json("Incorrect Credentials");
        }
        // Sign a token for the user
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "24h" }
        )
        // Respond to request with success message
        res.json({ message: "User Logged In", accessToken: token });
    } catch (error) {
        next(error);
    }
};


export const getProfile = async (req, res, next) => {
    try {
        // Find authenticated user from database
        const user = await UserModel
            .findById(req.auth.id)
            .select({ password: false });

        // Respond to request with success message
        res.json(user);
    } catch (error) {
        next(error);
    }
}
export const logoutUser = (req, res, next) => {
    res.json("User Logged Out");
};

export const updateProfile = (req, res, next) => {
    try {
        //    Validate user input
        const { error, value } = updateProfileValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        
   } catch (error) {
    next(error);
   }
};
