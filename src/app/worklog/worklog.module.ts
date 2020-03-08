import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkLogRoutingModule } from './worklog-routing.module';
import { WorklogComponent } from './components/worklog/worklog.component';
import { MemberLogComponent } from './pages/member-log/member-log.component';
import { CarouselNavigationComponent } from './components/carousel-navigation/carousel-navigation.component';

@NgModule({
  declarations: [WorklogComponent, MemberLogComponent, CarouselNavigationComponent],
  imports: [CommonModule, WorkLogRoutingModule, NgbModule],
})
export class WorkLogModule {}
