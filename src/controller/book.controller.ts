import { NextFunction, Request, Response } from "express";
import { BookRequest, BookResponse } from "../model/book.model";
import { BookService } from "../service/book.service";
import { ApiResponse,HttpStatus } from "../utils/ApiResponse";

export class BookController {

  private service: BookService;

  constructor() {
    this.service = new BookService();
    this.endPointSave = this.endPointSave.bind(this);
    this.endPointList = this.endPointList.bind(this);
    this.endPointFindById = this.endPointFindById.bind(this);
    this.endPointDeleteById = this.endPointDeleteById.bind(this);
  }

  async endPointSave(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const bookRequest: BookRequest = req.body;
      const bookResponse: BookResponse = await this.service.saveBook(bookRequest);

      res.status(HttpStatus.Created).json(
        ApiResponse.success(HttpStatus.Created, "Libro creado correctamente", bookResponse)
      );

    } catch (error) {
      next(error); 
    }
  }

  async endPointList(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const bookResponse: BookResponse[] = await this.service.findAllBooks();
      res.status(HttpStatus.OK).json(
        ApiResponse.success(HttpStatus.OK, "Libros obtenidos correctamente", bookResponse)
      );
    } catch (error) {
      next(error); 
    }
  }

  async endPointFindById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

      const id = Number(req.params.id);

      const bookResponse = await this.service.findByIdBook(id);

      res.status(HttpStatus.OK).json(
        ApiResponse.success(HttpStatus.OK, "Se encontro el libro", bookResponse)
      );
      
    } catch (error) {
      next(error); 
    }
  }

    async endPointDeleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

      const id = Number(req.params.id);

      const bookResponse = await this.service.findDelete(id);

      res.status(HttpStatus.OK).json(
        ApiResponse.success(HttpStatus.OK, "Libro eliminado correctamente", bookResponse)
      );
      
    } catch (error) {
      next(error); 
    }
  }
}