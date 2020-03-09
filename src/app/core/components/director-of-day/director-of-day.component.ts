import { Component, OnInit, Input } from '@angular/core';
import { Director } from '../../../shared/models/director';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss']
})
export class DirectorOfDayComponent implements OnInit {
  @Input() public director: Director;

  constructor() { }

  ngOnInit(): void {
  }

}
