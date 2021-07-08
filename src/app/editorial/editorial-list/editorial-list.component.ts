import { Component, OnInit } from '@angular/core';
import { Editorial } from '../editorial';
import { EditorialService } from '../editorial.service';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.scss']
})
export class EditorialListComponent implements OnInit {

  editorials: Editorial[];

  constructor(private editorialService: EditorialService) { }

  getEditorials(): void {
    this.editorialService.getEditorials()
      .subscribe(editorials => {
        this.editorials = editorials;
      });
  }

  ngOnInit() {
    this.getEditorials();
  }

}
