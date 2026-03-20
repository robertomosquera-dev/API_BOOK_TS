import {prisma} from "../lib/prisma.js";
import { BookModel, Book } from "../model/book.model.js";
import {BookMapper} from "../mapper/book.mapper.js"

interface IBookInterfaces {
    save(book : BookModel) : Promise<BookModel>;
    findById(id : number) : Promise<BookModel | null>;
    findAll() : Promise<BookModel[]>;
    delete(id: number): Promise<BookModel>;
}

export class BookRepositoy implements IBookInterfaces{
    
    async save(bookModel: BookModel): Promise<BookModel> {
        if (!bookModel){
            throw Error("El Model no puede ser null");
        }
        const book:Book = await prisma.book.create({
            data: BookMapper.toDTO(bookModel)
        });
        return BookMapper.toModel(book);
    }

    async findById(id: number): Promise<BookModel | null> {

        const book : Book | null = await prisma.book.findUnique({ 
          where: { id }
        });

        if (!book) return null;

        return BookMapper.toModel(book);
    }

    async findAll(): Promise<BookModel[]> {
        const listBook : Book [] = await prisma.book.findMany();
        return listBook.map(BookMapper.toModel);
    }

    async delete(id: number): Promise<BookModel> {

        const book : Book | null = await prisma.book.delete({
            where: { id }
        }); 

        return BookMapper.toModel(book);
    }
    
}