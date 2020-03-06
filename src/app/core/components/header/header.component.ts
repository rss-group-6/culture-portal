import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  public language: string;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.language = 'EN';
  }

  public goTo(url): void {
    this.router.navigateByUrl(url);
  }

  public setLanguage(lang: string): void {
    this.language = lang;
  }
}
