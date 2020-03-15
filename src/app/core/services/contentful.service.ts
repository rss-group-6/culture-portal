import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContentfulService {
  public directors: Promise<Entry<any>[]>;
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor() {
    this.directors = this.getCourses();
  }

  getCourses(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'directors',
          },
          query,
        ),
      )
      .then(res => res.items);
  }
}
