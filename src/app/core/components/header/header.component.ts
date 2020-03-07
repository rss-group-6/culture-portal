import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStatePages } from '@core/models/State-pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  public language: string;
  public statePages: IStatePages;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.language = 'EN';
    this.statePages = {
      home: true,
      allDirectors: false,
      workLog: false,
      styleGuide: false,
    };
  }

  public goTo(url): void {
    for (const page of Object.keys(this.statePages)) {
      this.statePages[page] = `/${page}` === url;
    }
    this.router.navigateByUrl(url);
  }

  public setLanguage(lang: string): void {
    this.language = lang;
  }
}
