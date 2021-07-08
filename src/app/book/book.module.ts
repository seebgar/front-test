import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from "./book-list/book-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookListComponent]
})
export class BookModule { }
