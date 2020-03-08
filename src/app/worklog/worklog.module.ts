import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkLogRoutingModule } from './worklog-routing.module';
import { WorklogComponent } from './components/worklog/worklog.component';
import { MemberLogComponent } from './pages/member-log/member-log.component';
import { CarouselNavigationComponent } from './components/carousel-navigation/carousel-navigation.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [WorklogComponent, MemberLogComponent, CarouselNavigationComponent],
  imports: [CommonModule, WorkLogRoutingModule, NgbModule],
  // exports: [WorklogComponent, MemberLogComponent, CarouselNavigationComponent],
})
export class WorkLogModule {}
