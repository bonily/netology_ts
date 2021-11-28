import {BookType} from './types';

class BooksRepository {

  constructor(public books: BookType[]) {}
    private findCurrentIndex(id: string) {
      return this.books.findIndex(book => book.id === id);
    }

    createBook(book: BookType){
      this.books.push(book);
    }

    getBook(id: string){
      return this.books.find(book => book.id === id);
    }

    getBooks(){
      return this.books;
    }

    updateBook(id: string, newValue: BookType) {
      const index = this.findCurrentIndex(id);
      const newBooks: BookType[] = [...this.books.slice(0, index), newValue, ...this.books.slice(index + 1)];
      this.books = newBooks;
    }

    deleteBook(id: string) {
      const index = this.findCurrentIndex(id);
      const newBooks: BookType[] = [...this.books.slice(0, index), ...this.books.slice(index + 1)];
      this.books = newBooks;
    }
}

// const books = new BooksRepository([{id: '1', title: '231'} as BookType]);

export default BooksRepository;
