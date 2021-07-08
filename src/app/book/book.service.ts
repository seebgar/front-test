import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Book } from './book';

const API_URL = environment.apiURL;
const books = '/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + books);
  }
}
