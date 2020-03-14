import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Director } from '@shared/models/director';

@Component({
  selector: 'app-director-card',
  templateUrl: './director-card.component.html',
  styleUrls: ['./director-card.component.scss']
})
export class DirectorCardComponent implements OnInit {

  @Input() public director: Director;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public handleClick() {
    this.router.navigate(['director', this.director.id]);

  }

}
