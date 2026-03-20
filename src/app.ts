import express, { Request, Response, NextFunction } from "express";
import { ApiResponse,HttpStatus } from "./utils/ApiResponse";
import BookRoutes from "./routes/book.routes.js";

const app = express();

app.use(express.json());

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send("Hola mundo");
})

app.use('/book',BookRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(HttpStatus.InternalServerError).json(
    ApiResponse.error(HttpStatus.InternalServerError, error.message)
  );
});


export default app;