import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamMembersModule } from './team-members.module';
import { DevelopersListComponent } from './pages/developers-list/developers-list.component';


const routes: Routes = [{ path: '', component: DevelopersListComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamMembersRoutingModule { }
