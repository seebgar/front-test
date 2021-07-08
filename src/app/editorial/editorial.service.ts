import { Injectable } from '@angular/core';

import { Editorial } from './editorial';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const editorials = '/editorials';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

constructor(private http: HttpClient) { }
  getEditorials(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(API_URL + editorials);
  }
}
