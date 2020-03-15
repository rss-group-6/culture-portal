import { Injectable } from '@angular/core';
import { Director } from '@shared/models/director';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageService } from '@core/services/language.service';

@Injectable()
export class SearchService {
  public directors: Director[];
  public subjectSearch: BehaviorSubject<Director[]>;
  public observeSearch: Observable<Director[]>;
  public currentLng: string;
  protected EN = 'EN';
  protected RU = 'RU';
  protected BE = 'BE';

  constructor(private languageService: LanguageService) {
    this.subjectSearch = new BehaviorSubject(this.directors);
    this.observeSearch = this.subjectSearch.asObservable();
    this.languageService.getLanguage().subscribe(lang => {
      this.currentLng = lang;
    });
  }
}
