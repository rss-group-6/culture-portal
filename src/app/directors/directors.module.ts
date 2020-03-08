import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorOfDayComponent } from './components/director-of-day/director-of-day.component';
import { DirectorOfDayPageComponent } from './pages/director-of-day-page/director-of-day-page.component';

@NgModule({
  declarations: [DirectorOfDayComponent, DirectorOfDayPageComponent],
  imports: [CommonModule, DirectorsRoutingModule],
})
export class DirectorsModule {}
