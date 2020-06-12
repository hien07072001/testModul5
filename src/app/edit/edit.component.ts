import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import {Book} from '../interface/book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {group} from '@angular/animations';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookForm: FormGroup;
  book: Book;
  constructor(private bookService: BookService,
              private route: Router,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(item => {
      this.book = item;
      this.bookForm.patchValue(this.book);
    }, error => {alert('khong ton tai');
                 this.book = null;
    });


    this.bookForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
    });

  }
  onSubmit(){
    const {value} = this.bookForm;
    const data = {
      ...this.book,
      ...value
    };
    this.bookService.editBook(data)
      .subscribe(result => {
        this.route.navigate(['']);
      }, error => {
        console.log(error);
      });
  }
}
