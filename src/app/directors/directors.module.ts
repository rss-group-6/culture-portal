import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsRoutingModule } from './directors-routing.module';
import { AllDirectorsComponent } from './pages/all-directors/all-directors.component';
import { DirectorCardComponent } from './components/director-card/director-card.component';

@NgModule({
  declarations: [AllDirectorsComponent, DirectorCardComponent],
  imports: [CommonModule, DirectorsRoutingModule],
  exports: [AllDirectorsComponent]
})
export class DirectorsModule { }
