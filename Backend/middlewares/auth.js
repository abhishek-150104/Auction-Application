import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import ErrorHandler from "../middlewares/error.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource.", 400));
  }
  const decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY)

  req.user = await User.findById(decoded.id);
  next();
})