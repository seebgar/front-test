import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';
import { AuthorModule } from './author/author.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book/book-list/book-list.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { EditorialListComponent } from './editorial/editorial-list/editorial-list.component';

const routes: Routes = [

  {
      path: 'books',
      children: [
          {
              path: 'list',
              component: BookListComponent
          }
      ]
  },
  {
      path: 'authors',
      children: [
          {
              path: 'list',
              component: AuthorListComponent
          }
      ]
  },
  {
      path: 'editorials',
      children: [
          {
              path: 'list',
              component: EditorialListComponent
          }
      ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookModule,
    EditorialModule,
    AuthorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
