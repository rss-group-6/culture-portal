import { Injectable } from '@angular/core';
import { Director } from '@shared/models/director';
import { ContentfulService } from '@core/services/contentful.service';

@Injectable()
export class GetRandomAuthorService {
  public directors: Director[];

  constructor(private contentfulService: ContentfulService) {}

  public getAuthor(): Promise<Director> {
    return this.contentfulService.directors.then(respDirectors => {
      this.directors = respDirectors.map(item => item.fields);
      return this.directors[Math.floor(Math.random() * this.directors.length)];
    });
  }
}
