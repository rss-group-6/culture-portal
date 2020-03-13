import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDirectorsComponent } from './pages/all-directors/all-directors.component';

const routes: Routes = [
  { path: '', component: AllDirectorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorsRoutingModule { }
