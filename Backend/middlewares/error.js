class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err,req,res,next) => {
  err.message = err.message || "Internal Server Error.";
  err.statusCode= err.statusCode || 500;
  // console.log(err)
  if(err.name=== "JsonWebTokenError"){
    const message = "Json web Token is invlaid, Try Again";
    err = new ErrorHandler(message,400);
  }
  if(err.name=== "TokenExpiredError"){
    const message = "Json web Token is expired, Try Again";
    err = new ErrorHandler(message,400);
  }
  if(err.name=== "CastError"){
    const message = `Invalid${err.path}`;
    err = new ErrorHandler(message,400);
  }
  const errorMessage = err.errors ? Object.values(err.errors)
  .map((error)=>error.message)
  .join(" ")
  :err.message;

  return res.status(err.statusCode).json({
    success:false,
    message:errorMessage,
  });

};


export default ErrorHandler;