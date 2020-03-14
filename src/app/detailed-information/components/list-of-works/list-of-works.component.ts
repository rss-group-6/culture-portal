import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-works',
  templateUrl: './list-of-works.component.html',
  styleUrls: ['./list-of-works.component.scss'],
})
export class ListOfWorksComponent implements OnInit {
  @Input() public listOfWorks: { date: string; work: string }[];

  constructor() {}

  ngOnInit(): void {}
}
