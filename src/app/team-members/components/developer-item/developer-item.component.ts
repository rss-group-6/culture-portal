import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-item',
  templateUrl: './developer-item.component.html',
  styleUrls: ['./developer-item.component.scss'],
})
export class DeveloperItemComponent {
  @Input() developer;
  constructor() {}
}
