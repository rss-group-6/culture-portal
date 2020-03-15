import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../../environments/environment';
import { LanguageService } from '@core/services/language.service';
import { DataLang } from '@core/models/enums';

@Injectable()
export class ContentfulService {
  public directors: Promise<Entry<any>[]>;
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });
  private lang: string;

  constructor(private languageService: LanguageService) {
    this.directors = this.getCourses();
    this.languageService.getLanguage().subscribe(lang => {
      this.lang = DataLang[lang];
      this.directors = this.getCourses();
    });
  }

  getCourses(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: this.lang,
          },
          query,
        ),
      )
      .then(res => res.items);
  }
}
