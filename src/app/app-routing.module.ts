import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@core/pages/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'allDirectors',
    loadChildren: () => import('./directors/directors.module').then(m => m.DirectorsModule),
  },
  {
    path: 'workLog',
    loadChildren: () => import('./worklog/worklog.module').then(m => m.WorklogModule),
  },
  {
    path: 'styleGuide',
    loadChildren: () => import('./styleguide/styleguide.module').then(m => m.StyleguideModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
