export class BookModel {
    constructor(
        private id: number | null,
        private titulo: string,
        private stock: number,
        private autor: string,
        private editorial: string,
        private ano: number,
        private disponible: boolean = true
    ) {}

    public getId() : number | null {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getStock(): number {
        return this.stock;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public getAno(): number {
        return this.ano;
    }

    public getDisponible(): boolean {
        return this.disponible;
    }


    public setId(id: number | null): void {
        this.id = id;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public setEditorial(editorial: string): void {
        this.editorial = editorial;
    }

    public setAno(ano: number): void {
        this.ano = ano;
    }

    public setDisponible(disponible: boolean): void {
        this.disponible = disponible;
    }
}

// book.model.ts
export type Book = {
    readonly id:         number;  
    readonly titulo:     string;
    readonly stock:      number;
    readonly autor:      string;
    readonly editorial:  string;
    readonly ano:        number;
    readonly disponible: boolean;
};

// Omitir id, y hacer disponible opcional
export type BookRequest = Omit<Book, "id" | "disponible"> & {
  disponible?: boolean;
};
export type UpdateBookRequest = {id:number} & Partial<Book>;

export type BookResponse = Readonly<Book>;