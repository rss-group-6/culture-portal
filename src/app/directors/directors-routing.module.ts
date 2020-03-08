import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorOfDayPageComponent } from './pages/director-of-day-page/director-of-day-page.component';

const routes: Routes = [
  { path: '', component: DirectorOfDayPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorsRoutingModule {}
