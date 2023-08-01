import { NextFunction, Response } from "express";
import { DecodedAccessToken, RequestWithUser } from "./types";
import { sendUnauthenticatedError, verifyToken } from "./utils";

export async function authMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  // after buy domain req.query.token -> req.cookies.token
  const token = req.query.token;
  if (!token) return sendUnauthenticatedError(res);

  try {
    const decoded = verifyToken(token as string);
    req.user = decoded as DecodedAccessToken;
    next();
  } catch (err) {
    sendUnauthenticatedError(res);
  }
}
