import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-portal',
  templateUrl: './description-portal.component.html',
  styleUrls: ['./description-portal.component.scss']
})
export class DescriptionPortalComponent implements OnInit {
  public currentDate: Date;
  constructor() { }

  public ngOnInit(): void {
    this.currentDate = new Date();
  }
}
