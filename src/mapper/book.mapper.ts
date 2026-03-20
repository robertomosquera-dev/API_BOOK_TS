import { BookModel, Book, BookRequest, BookResponse } from "../model/book.model.js";

export  class BookMapper {

    static toBookModel(book:BookRequest):BookModel {
        return new BookModel(
            null,
            book.titulo,
            book.stock,
            book.autor,
            book.editorial,
            book.ano,
            book.disponible
        );    
    }

    static toResponse(book:BookModel) : BookResponse {
        return {
            id: book.getId()!,
            titulo: book.getTitulo(),
            stock: book.getStock(),
            autor: book.getAutor(),
            editorial: book.getEditorial(),
            ano: book.getAno(),
            disponible: book.getDisponible()
        }
    }

    static toDTO (book:BookModel) {
        return {
            titulo: book.getTitulo(),
            stock: book.getStock(),
            autor: book.getAutor(),
            editorial: book.getEditorial(),
            ano: book.getAno(),
            disponible: book.getDisponible()
        }
    }

    static toModel(book: Book): BookModel {
        return new BookModel(
            book.id,
            book.titulo,
            book.stock,
            book.autor,
            book.editorial,
            book.ano,
            book.disponible
        );
  }
} 

