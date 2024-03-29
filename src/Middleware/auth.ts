import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, `${process.env.JWT_SECRET}`, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      // console.log("reqqqq authhhh", req);

      next();
    });
  } else {
    res.sendStatus(401);
  }
};
