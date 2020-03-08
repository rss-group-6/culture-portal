import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { DevelopersListComponent } from './components/developers-list/developers-list.component';
import { DeveloperItemComponent } from './components/developer-item/developer-item.component';
import { DescriptionPortalComponent } from './components/description-portal/description-portal.component';
import { DirectorOfDayPageComponent } from './pages/director-of-day-page/director-of-day-page.component';
import { DirectorOfDayComponent } from './components/director-of-day/director-of-day.component';

@NgModule({
  declarations: [HeaderComponent, HomePageComponent, DevelopersListComponent, DescriptionPortalComponent, DirectorOfDayComponent, DirectorOfDayPageComponent],
  imports: [CommonModule, SharedModule, NgbModule],
  exports: [SharedModule, HomePageComponent, HeaderComponent, DevelopersListComponent]
})
export class CoreModule {}
