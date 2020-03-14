import { Component, Input } from '@angular/core';
import { Director } from '@shared/models/director';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss'],
})
export class DirectorOfDayComponent {
  @Input() public director: Director;

  constructor(
    private router: Router,
  ) { }

  public goToDetails(): void {
    this.router.navigate(['director', this.director.id])
  }
}
