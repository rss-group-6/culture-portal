import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Developers } from '@shared/mock-data/mock.developers';
import { WorklogService } from '../../services/worklog.service';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselNavigationComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  public members: string[] = [];

  constructor(config: NgbCarouselConfig, public worklogService: WorklogService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    Developers.map(e => this.members.push(`${e.name} ${e.surname}`));
  }
}
