import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { WorklogService } from '../../services/worklog.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@core/services/language.service';
import { GeneralLog } from '../../models/worklog.models';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselNavigationComponent {
  public language;
  public members = this.getMembersName();

  constructor(
    config: NgbCarouselConfig,
    public worklogService: WorklogService,
    public translate: TranslateService,
    private languageService: LanguageService,
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
    });
  }

  ngOnInit() {
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
    });
  }

  public getMembersName(): Array<string> {
    this.languageService.getLanguage().subscribe(lang => {
      this.language = lang;
      this.translate.use(lang);
    });
    const member = [];
    GeneralLog[this.language].map(e => member.push(e.name));
    return member;
  }

  public generalTitle(): string {
    return GeneralLog[this.language][0].name;
  }
}
