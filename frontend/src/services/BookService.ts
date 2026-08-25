import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookStore.js';
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js';
import { nextId } from '@/utils/nextId.js';

export class BookService {
  static getBooks(): BookInterface[] {
    return useBookStore().books;
  }

  static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }

  static createBook(book: CreateBookDTO): void {
    const store = useBookStore();
    store.books.push({ id: nextId(store.books), ...book });
  }

  static getUniqueCategories(): string[] {
    const categories = useBookStore().books.map((book) => book.category);
    return Array.from(new Set(categories));
  }
}
