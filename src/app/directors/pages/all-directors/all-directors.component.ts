import { Component, OnInit } from '@angular/core';
import { Directors } from '@shared/mock-data/mock.directors';
import { Director } from '@shared/models/director';

@Component({
  selector: 'app-all-directors',
  templateUrl: './all-directors.component.html',
  styleUrls: ['./all-directors.component.scss']
})
export class AllDirectorsComponent implements OnInit {

  public allDirectors /*: Director */ = Directors.concat(Directors);

  constructor() { }

  ngOnInit(): void {
  }

}
