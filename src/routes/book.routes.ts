import { Router } from "express";
import { BookController } from "../controller/book.controller";

const app = Router();
const controller = new BookController();

app.post('/',controller.endPointSave);
app.get('/',controller.endPointList);
app.get('/:id',controller.endPointFindById);
app.delete('/:id',controller.endPointDeleteById);

export default app;