import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IStatePages } from '@core/models/State-pages';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@core/services/language.service';
import { LinksPage } from '@core/models/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  public language: string;
  public statePages: IStatePages;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {}

  public ngOnInit(): void {
    this.router.navigateByUrl('/');
    const href = this.router.url;
    this.statePages = {
      home: href === LinksPage.home || href === '/',
      allDirectors: href === LinksPage.allDirectors,
      workLog: href === LinksPage.workLog,
      styleGuide: href === LinksPage.styleGuide,
      ourTeam: href === LinksPage.ourTeam,
    };
    this.translate.setDefaultLang('EN');
    this.language = 'EN';
  }

  public goTo(url): void {
    for (const page of Object.keys(this.statePages)) {
      this.statePages[page] = `/${page}` === url;
    }
    this.router.navigateByUrl(url);
  }

  public setLanguage(lang: string): void {
    this.language = lang;
    this.languageService.setLanguage(lang);
    this.translate.use(lang);
  }
}
