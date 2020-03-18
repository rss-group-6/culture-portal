import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Director } from '@shared/models/director';
import { Observable } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@core/services/language.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContentfulService } from '@core/services/contentful.service';

@Component({
  selector: 'app-all-directors',
  templateUrl: './all-directors.component.html',
  styleUrls: ['./all-directors.component.scss'],
})
export class AllDirectorsComponent implements OnInit {
  public allDirectors: Director[];
  public input: Observable<Event>;
  public searchParam: string;
  public  searchValue: string;
  @ViewChild('searchQuery') public searchQuery: ElementRef;

  constructor(
    private searchService: SearchService,
    private translate: TranslateService,
    private languageService: LanguageService,
    private spinnerService: NgxSpinnerService,
    private contentfulService: ContentfulService,
  ) {
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
      this.contentfulService.directors.then(directors => {
        this.allDirectors = directors.map(item => item.fields);
      });
    });
  }

  public ngOnInit(): void {
    this.contentfulService.directors.then(directors => {
      this.allDirectors = directors.map(item => item.fields);
    });
    this.translate.setDefaultLang('EN');
    this.spinner();
  }

  private spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 0);
  }
}
