import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Directors } from '@shared/mock-data/mock.directors';
import { Director } from '@shared/models/director';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, debounceTime } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-all-directors',
  templateUrl: './all-directors.component.html',
  styleUrls: ['./all-directors.component.scss']
})

export class AllDirectorsComponent implements OnInit, AfterViewInit {

  public allDirectors: Director[];
  public input: Observable<Event>;
  @ViewChild('searchQuery') public searchQuery: ElementRef;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.observeSearch.subscribe(
      arrOfDirectors => this.allDirectors = arrOfDirectors
    );

  }

  public ngAfterViewInit(): void {

    this.input = fromEvent(this.searchQuery.nativeElement, 'keyup');
    this.input.pipe(
      map(event => (event.target as HTMLInputElement).value),
      map(inputStr => {
        if (inputStr.length > 2) {
          return inputStr;
        } else {
          return '';
        }
      }),
      // filter(inputStr => inputStr.length > 2),
      debounceTime(500)
    ).subscribe(
      str => {
        console.log('str' + str);
        this.searchService.getSearchResult(str);
      }
    );
  }

}
