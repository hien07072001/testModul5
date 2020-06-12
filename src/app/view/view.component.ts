import { Component, OnInit } from '@angular/core';
import {Book} from '../interface/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

}
