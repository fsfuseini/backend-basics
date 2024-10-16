import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({
  dest: "uploads/",
});

export const saveFilesOrgUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVE_FILES_ORG_API_ACCESS_TOKEN,
    relativePath: "/todo-api/users/*",
  }),
  preservePath: true,
});
