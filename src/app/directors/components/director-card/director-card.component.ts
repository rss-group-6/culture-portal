import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Director } from '@shared/models/director';

@Component({
  selector: 'app-director-card',
  templateUrl: './director-card.component.html',
  styleUrls: ['./director-card.component.scss'],
})
export class DirectorCardComponent implements OnInit {
  @Input() public director: Director;
  public urlPhoto: string;
  public name: string;
  public surname: string;
  public yearsOfLife: string;
  public birthPlace: string;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.name = this.director.name;
    this.surname = this.director.surname;
    this.urlPhoto = this.director.photos[0].fields.file.url;
    this.birthPlace = this.director.birthPlace;
    this.yearsOfLife = this.director.yearsOfLife;
  }

  public handleClick(): void {
    this.router.navigate(['director', this.director.id]);
  }
}
