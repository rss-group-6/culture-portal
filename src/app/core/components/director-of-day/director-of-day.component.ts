import { Component, OnInit } from '@angular/core';
import { Director } from '../../../shared/models/director';
import { Directors } from '../../../shared/mock-data/mock.directors';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss']
})
export class DirectorOfDayComponent implements OnInit {
  public directors: Director[] = Directors;

  constructor() { }

  ngOnInit(): void {
  }

}