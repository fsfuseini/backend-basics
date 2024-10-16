import { Router } from "express";
import { registerUser, loginUser, logoutUser, updateProfile } from "../controllers/user";

const userRouter = Router();

userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.post("/users/logout", logoutUser);

userRouter.post("/users/profile", updateProfile);



export default userRouter;