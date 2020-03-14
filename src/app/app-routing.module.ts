import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@core/pages/home/home-page.component';
import { Error404pageComponent } from '@core/pages/error404page/error404page.component';

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
    path: 'director/:id',
    loadChildren: () =>
      import('./detailed-information/detailed-information.module').then(m => m.DetailedInformationModule),
  },
  {
    path: 'workLog',
    loadChildren: () => import('./worklog/worklog.module').then(m => m.WorkLogModule),
  },
  {
    path: 'styleGuide',
    loadChildren: () => import('./styleguide/styleguide.module').then(m => m.StyleGuideModule),
  },
  {
    path: 'ourTeam',
    loadChildren: () => import('./team-members/team-members.module').then(m => m.TeamMembersModule),
  },
  {
    path: '**',
    component: Error404pageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
