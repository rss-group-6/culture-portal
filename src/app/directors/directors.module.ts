import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsRoutingModule } from './directors-routing.module';
import { AllDirectorsComponent } from './pages/all-directors/all-directors.component';

@NgModule({
  declarations: [AllDirectorsComponent],
  imports: [CommonModule, DirectorsRoutingModule],
  exports: [AllDirectorsComponent]
})
export class DirectorsModule { }
