import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Director, PlacesOfActivity, ListOfWorks, Biography } from '@shared/models/director';
import { LanguageService } from '@core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { ContentfulService } from '@core/services/contentful.service';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss'],
})
export class DetailesComponent implements OnInit {
  public director: Director;
  public id: string;
  public name: string;
  public surname: string;
  public yearsOfLife: string;
  public photos: string[];
  public video: string[];
  public listOfWorks: ListOfWorks[];
  public placesOfActivity: PlacesOfActivity[];
  public biography: Biography[];

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private languageService: LanguageService,
    private contentfulService: ContentfulService,
  ) {
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
    });
  }

  public ngOnInit(): void {
    this.name = '';
    this.surname = '';
    this.yearsOfLife = '';
    this.photos = [''];
    this.video = [''];
    this.placesOfActivity = [{center: [0, 0], activity: ''}];

    this.translate.setDefaultLang('EN');
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getDirector(params.id);
    });
  }

  public getDirector(id: string): void {
    this.contentfulService.directors.then(directors => {
      const director = directors.find(item => item.fields.id === id).fields;
      this.name = director.name;
      this.surname = director.surname;
      this.yearsOfLife = director.yearsOfLife;
      this.photos = director.photos.map(item => item.fields.file.url);
      this.video = director.videos;
      this.listOfWorks = director.listOfWorks;
      this.placesOfActivity = director.placeOfActivity;
      this.biography = director.biography;
    });
  }
}
