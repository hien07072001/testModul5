import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditComponent } from './edit/edit.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
    {
      path: '',
      component: BooksComponent
    },
   {
    path: 'book-add',
    component: AddBookComponent
    },
    {
    path: 'book-edit/:id',
    component: EditComponent
    },
    {
    path: 'book-view/:id',
    component: ViewComponent
    },
];
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
