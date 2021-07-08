import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorService) { }

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }

  getFechaCorta(date:any): any {
      var shortDate: string = date + "";
      return shortDate.split("T")[0];
  }

  ngOnInit() {
    this.getAuthors();
  }

}
