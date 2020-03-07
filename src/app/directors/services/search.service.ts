import { Injectable } from '@angular/core';
import { Directors } from '@shared/mock-data/mock.directors';
import { Director } from '@shared/models/director';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public arrOfDirectors: Director[] = Directors.concat(Directors);

  public subjectSearch: BehaviorSubject<Director[]>;
  public observeSearch: Observable<Director[]>;

  constructor() {
    this.subjectSearch = new BehaviorSubject(this.arrOfDirectors);
    this.observeSearch = this.subjectSearch.asObservable();
  }

  public getCurrentLenguage() { }

  private searchByQuery(query: string) {
    // add city/place of birth
    // add lng
    const queryStr: string = query.toLowerCase();
    return this.arrOfDirectors.filter(director => director.name.toLowerCase().includes(queryStr) ||
      director.surname.toLowerCase().includes(queryStr)
    );
  }

  public getSearchResult(query: string) {
    this.subjectSearch.next(this.searchByQuery(query));
  }




}
