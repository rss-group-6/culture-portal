import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleListComponent } from './pages/style-list/style-list.component';

const routes: Routes = [{ path: '', component: StyleListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleGuideRoutingModule {}
