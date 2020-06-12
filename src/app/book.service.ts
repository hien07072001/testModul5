import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './interface/book';
import {HttpClient} from '@angular/common/http';


const learningAPI = 'http://localhost:3000/books';

class HttpClien {
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(learningAPI);
  }
  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(learningAPI , book);
  }

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${learningAPI}/${id}`);
  }

  editBook(book: Book): Observable<Book>{
    return this.httpClient.put<Book>(`${learningAPI}/${book.id}`, book);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${learningAPI}/${id}`);
  }
}
