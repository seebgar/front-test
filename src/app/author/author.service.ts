import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Author } from './author';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const authors = '/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(API_URL + authors);
  }

}
