import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IStatePages } from '@core/models/State-pages';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public language = this.sharedService.language;
  public isMenuCollapsed = true;
  public statePages: IStatePages;

  constructor(private router: Router, public sharedService: SharedService) {}

  public ngOnInit(): void {
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
}
