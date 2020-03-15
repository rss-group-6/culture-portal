import { Component, OnInit, Input } from '@angular/core';
import { Biography } from '@shared/models/director';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() public biography: Biography[];

  constructor() {}

  ngOnInit(): void {}
}
