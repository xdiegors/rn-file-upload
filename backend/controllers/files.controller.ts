import { Request, Response } from "express";

const postFile = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send("No file uploaded.");
    }
    res.status(201).send("File uploaded!");
  } catch (error) {
    console.error(error);
  }
};

export { postFile };
