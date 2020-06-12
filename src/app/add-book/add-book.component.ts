import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../interface/book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookList: Book[] = [];
  success: string;
  fail: string;
  bookForm: FormGroup;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),

      }
    );
  }

  onSubmit(){
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.addBook(value)
        .subscribe(result =>
        { console.log('Add book successfully !');
          this.bookList.push(result);
          this.bookForm.reset({
            title: '', author: '', description: ''
          });
        }, error => {
          console.log('Add book successfully !');
        });
    }
  }

}
