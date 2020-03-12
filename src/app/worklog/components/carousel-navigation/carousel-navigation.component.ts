import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { WorklogService } from '../../services/worklog.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselNavigationComponent implements OnInit {
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

  public ngOnInit(): void {
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
    });
  }
}
