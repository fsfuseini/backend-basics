import { Router } from "express";
import { registerUser, loginUser, logoutUser, updateProfile, getProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

const userRouter = Router();

userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.post("/users/logout", logoutUser);

userRouter.post("/users/me", userAvatarUpload.single("avatar"), updateProfile);

userRouter.get("/users/me",getProfile);

export default userRouter;