import { Injectable } from '@angular/core';
import { Directors as DirectorsRU } from '@shared/mock-data/mock.directors';
import { Directors as DirectorsBE } from '@shared/mock-data/mock.directorsBE';
import { Directors as DirectorsEN } from '@shared/mock-data/mock.directorsEN';
import { Director } from '@shared/models/director';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageService } from '@core/services/language.service';
import { BrowserStack } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public subjectSearch: BehaviorSubject<Director[]>;
  public observeSearch: Observable<Director[]>;
  public currentLng: string;
  protected EN = 'EN';
  protected RU = 'RU';
  protected BE = 'BE';

  constructor(private languageService: LanguageService) {
    this.subjectSearch = new BehaviorSubject(DirectorsRU);
    this.observeSearch = this.subjectSearch.asObservable();


    this.languageService.getLanguage().subscribe(lang => {
      this.currentLng = lang;
      console.log('lng: ' + this.currentLng);
    });
  }

  private searchByQuery(query: string) {

    const queryStr: string = query.toLowerCase();

    switch (this.currentLng) {
      case this.EN:
        return this.searchIn(DirectorsEN, queryStr);

      case this.RU:
        return this.searchIn(DirectorsRU, queryStr);

      case this.BE:
        return this.searchIn(DirectorsBE, queryStr);
    }

  }

  private searchIn(arrOfDirectors, queryStr) {
    return arrOfDirectors.filter(director => director.name.toLowerCase().includes(queryStr)
      || director.surname.toLowerCase().includes(queryStr)
      || director.birthPlace.toLowerCase().includes(queryStr)
    );

  }

  public getSearchResult(query: string) {
    this.subjectSearch.next(this.searchByQuery(query));
  }

}
