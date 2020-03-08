import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { GeneralLog } from '../../models/worklog.models';
import { WorklogService } from '../../services/worklog.service';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselNavigationComponent implements OnInit {
  public membersTitle: string[] = [];
  public generalTitle = GeneralLog[this.worklogService.lang][0].name;

  constructor(config: NgbCarouselConfig, public worklogService: WorklogService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  public ngOnInit(): void {
    GeneralLog[this.worklogService.lang].map(e => this.membersTitle.push(e.name));
    this.membersTitle = this.membersTitle.splice(1);
  }
}
