import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailesComponent } from './pages/detailes/detailes.component';

const routes: Routes = [
  {
    path: '',
    component: DetailesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedInformationRoutingModule {}
