import { Request, Response } from "express";
import { fileUpload } from "./middlewares/fileUpload";
import cors from "cors";
import { postFile } from "./controllers/files.controller";

const express = require("express");

const app = express();

app.use(cors());

app.post("/file", fileUpload.single("file"), postFile);

app.get("/", (req: Request, res: Response) => {
  res.send("API running");
});

app.listen(3000, () => {
  console.log("API started");
});
