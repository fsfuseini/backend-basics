import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({
  dest: "uploads/",
});

export const todoIconUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVE_FILES_ORG_API_ACCESS_TOKEN,
    relativePath: "/todo-api/todos/*",
  }),
  preservePath: true,
});

export const userAvatarUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVE_FILES_ORG_API_ACCESS_TOKEN,
    relativePath: "/todo-api/users/*",
  }),
  preservePath: true,
});