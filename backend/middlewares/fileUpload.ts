import { Request } from "express";
import multer from "multer";

const maxSize = 2 * 1024 * 1024; // size in bytes - sets the maxSize to 2MB

let storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "uploads/");
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, file.originalname);
  },
});

const fileUpload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
});

export { fileUpload };
