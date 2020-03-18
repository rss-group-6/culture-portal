import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit, DoCheck {
  public param: string;
  private input: Observable<Event>;
  @ViewChild('inpSearch') private inpSearch: ElementRef;
  @Output() public searchValue = new EventEmitter<string>();
  @Output() public searchParam = new EventEmitter<string>();

  public ngOnInit(): void {
    this.param = 'name';
    this.searchParam.emit(this.param);
  }

  public ngDoCheck(): void {
    this.searchParam.emit(this.param);
  }

  public ngAfterViewInit(): void {
    this.input = fromEvent(this.inpSearch.nativeElement, 'keyup');
    this.input
      .pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500),
      )
      .subscribe(value => {
          this.searchValue.emit(value);
      });
  }
}
