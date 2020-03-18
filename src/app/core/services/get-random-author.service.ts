import { Injectable } from '@angular/core';
import { Director } from '@shared/models/director';
import { ContentfulService } from '@core/services/contentful.service';

@Injectable()
export class GetRandomAuthorService {
  public directors: Director[];
  public indexAuthorOfDay: number;

  constructor(private contentfulService: ContentfulService) {
    this.contentfulService.subjectData.subscribe(value => {
      value.then(respDirectors => {
        this.directors = respDirectors.map(item => item.fields);
      });
    });
  }

  public getAuthor(): Promise<Director> {
    return this.contentfulService.directors.then(respDirectors => {
      if (this.indexAuthorOfDay) {
        return this.directors[this.indexAuthorOfDay];
      }
      this.directors = respDirectors.map(item => item.fields);
      this.indexAuthorOfDay = Math.floor(Math.random() * this.directors.length);
      return this.directors[this.indexAuthorOfDay];
    });
  }
}
