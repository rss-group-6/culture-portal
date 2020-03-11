import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-developer-item',
  templateUrl: './developer-item.component.html',
  styleUrls: ['./developer-item.component.scss'],
})
export class DeveloperItemComponent implements OnInit {
  @Input() developer;
  constructor(
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
    });
  }

  public ngOnInit(): void {
    this.translate.setDefaultLang('EN');
  }
}
