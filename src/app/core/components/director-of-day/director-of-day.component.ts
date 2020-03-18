import { Component, OnInit } from '@angular/core';
import { Director } from '@shared/models/director';
import { Router } from '@angular/router';
import { GetRandomAuthorService } from '@core/services/get-random-author.service';
import { ContentfulService } from '@core/services/contentful.service';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss'],
})
export class DirectorOfDayComponent implements OnInit {
  public director: Director;
  public name: string;
  public surname: string;
  public yearsOfLife: string;
  public generalInfo: string;
  public urlPhoto: string;

  constructor(
    private router: Router,
    private getRandomAuthorService: GetRandomAuthorService,
    private contentfulService: ContentfulService,
  ) {
    this.contentfulService.subjectData.subscribe(value => {
      value.then(item => {
        const randomIndex = this.getRandomAuthorService.indexAuthorOfDay;
        this.setInfo(item[randomIndex].fields);
      });
    });
  }

  public ngOnInit(): void {
    this.name = '';
    this.surname = '';
    this.yearsOfLife = '';
    this.generalInfo = '';
    this.getRandomAuthorService.getAuthor().then(director => {
      this.setInfo(director);
    });
  }

  public goToDetails(): void {
    this.router.navigate(['director', this.director.id]);
  }

  private setInfo(director: Director): void {
    this.name = director.name;
    this.surname = director.surname;
    this.yearsOfLife = director.yearsOfLife;
    this.generalInfo = director.generalInfo;
    this.urlPhoto = director.photos[0].fields.file.url;
    this.director = director;
  }
}
