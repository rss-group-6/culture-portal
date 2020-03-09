import { Component, OnInit } from '@angular/core';
import { Developer } from '@shared/models/developer';
import { Developers } from '@shared/mock-data/mock.developers';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss']
})
export class DevelopersListComponent implements OnInit {

  developers: Developer[] = Developers;

  constructor() { }

  ngOnInit(): void {
  }

}
