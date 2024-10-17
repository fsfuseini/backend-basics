import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    try {
        // Get authorization header
        const authorization = req.headers.authorization;
        console.log(authorization);
        // Extract token from header
        // Verify and decode token to get user information
        // Attach user information to request
        // Hand over request to next middleware/controller
        next();
    } catch (error) {
        res.status(401).json("Please Login First");
    }
}