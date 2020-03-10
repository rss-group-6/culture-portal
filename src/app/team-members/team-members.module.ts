import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersRoutingModule } from './team-members-routing.module';
import { DeveloperItemComponent } from './components/developer-item/developer-item.component';
import { DevelopersListComponent } from './pages/developers-list/developers-list.component';


@NgModule({
  declarations: [DevelopersListComponent, DeveloperItemComponent],
  imports: [
    CommonModule,
    TeamMembersRoutingModule
  ],
  exports: [DevelopersListComponent]
})
export class TeamMembersModule { }
