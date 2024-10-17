import { expressjwt } from "express-jwt";
import { UserModel } from "../models/user.js";
import { permissions } from "../utils/rbac.js";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"]
});

export const hasPermission = (action) => {
    return async (req, res, next) => {
        try {
            // Find authenticated user from database
            const user = await UserModel
                .findById(req.auth.id)
            // .populate("role");
            // Use the user role to find their permissions
            const permission = permissions.find(value => value.role === user.role);
            if (!permission) {
                return res.status(403).json("Permission Denied!");
            }
            // Check if user has permission
            if (permission.actions.includes(action)) {
                next();
            }
            else {
                return res.status(403).json("Permission Denied!");
            }
        } catch (error) {
            next(error);
        }
    }
}
// import jwt from "jsonwebtoken";

// export const isAuthenticated = (req, res, next) => {
//     try {
//         // Get authorization header
//         const authorization = req.headers.authorization;
//         // Extract token from header
//         const token = authorization.split(" ")[1];
//         // Verify and decode token to get user information
//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         console.log(decoded);
//         // Attach user information to request
//         req.user = { id: decoded.id};
//         // Hand over request to next middleware/controller
//         next();
//     } catch (error) {
//         next(error);
//         // res.status(401).json("Please Login First");
//     }
// }