import { BookMapper } from "../mapper/book.mapper";
import { BookRequest, BookResponse } from "../model/book.model";
import { BookRepositoy } from "../repository/book.repository";

interface IBookService {
    saveBook(bookRequest:BookRequest) : Promise<BookResponse>;
    findByIdBook(id:number):Promise<BookResponse | null >;
    findAllBooks():Promise<BookResponse[]>
    findDelete(id:number):Promise<BookResponse>
}

export class BookService implements IBookService{

    private repository:BookRepositoy;

    constructor(){
        this.repository = new BookRepositoy();
    }

    async saveBook(bookRequest: BookRequest): Promise<BookResponse> {
        if(!bookRequest){
            throw new Error("");
        }
        let book = BookMapper.toBookModel(bookRequest);
        book = await this.repository.save(book);
        return BookMapper.toResponse(book);
    }

    async findByIdBook(id: number): Promise<BookResponse | null> {
        if (id === null) throw new Error("No se puede pasar un Id null");
        const book = await this.repository.findById(id); 
        if (!book) return null; 
        return BookMapper.toResponse(book);
    }

    async findAllBooks(): Promise<BookResponse[]> {
        const books = await this.repository.findAll();
        return books.map(BookMapper.toResponse);
    }

    async findDelete(id: number): Promise<BookResponse> {
        if (!id) throw new Error("El id no puede ser null");
        const book = await this.repository.delete(id);
        return BookMapper.toResponse(book);
    }

}