import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { GeneralLog, Item, WorkLog } from '../../models/worklog.models';
import { WorklogService } from '../../services/worklog.service';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselNavigationComponent {
  public language = this.sharedService.language;
  public members = this.getMembersName();

  constructor(
    config: NgbCarouselConfig,
    public worklogService: WorklogService,
    public sharedService: SharedService,
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  public getMembersName(): Array<string> {
    const member = [];
    GeneralLog[this.sharedService.language].map(e => member.push(e.name));
    return member;
  }

  public generalTitle(): string {
    return GeneralLog[this.sharedService.language][0].name;
  }
}
