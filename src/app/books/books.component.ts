import { Component, OnInit } from '@angular/core';
import {Book} from '../interface/book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: Book[];


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAll().subscribe(result => {
      this.bookList = result;
    });
  }
    deleteBook(i) {
      const book = this.bookList[i];
      this.bookService.deleteBook(book.id)
        .subscribe((result) => {
          this.bookList = this.bookList.filter(t => t.id !== book.id);
        });
    }
}

