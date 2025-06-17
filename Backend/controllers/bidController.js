import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

export const placeBid = catchAsyncErrors(async (req, res, next) => {
  const{id} = req.params;
  const auctionItem = await Auction.findById(id);
  if (!auctionItem) {
    return next(new ErrorHandler("Auction item not found.", 404));
  }
  const {amount}=req.body;
})