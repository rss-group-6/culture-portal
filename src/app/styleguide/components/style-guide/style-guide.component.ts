import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
  title = 'Style Guide';
  @Input() item;
  constructor(
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
