import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { DescriptionPortalComponent } from './components/description-portal/description-portal.component';
import { DirectorOfDayPageComponent } from './pages/director-of-day-page/director-of-day-page.component';
import { DirectorOfDayComponent } from './components/director-of-day/director-of-day.component';
import { GetRandomAuthorService } from './services/get-random-author.service';
import { Error404Component } from './components/error404/error404.component';
import { Error404pageComponent } from './pages/error404page/error404page.component';

@NgModule({
  declarations: [HeaderComponent, HomePageComponent, DescriptionPortalComponent,
    DirectorOfDayComponent, DirectorOfDayPageComponent, Error404Component, Error404pageComponent],
  imports: [CommonModule, SharedModule, NgbModule],
  exports: [SharedModule, HomePageComponent, HeaderComponent],
  providers: [GetRandomAuthorService]
})
export class CoreModule {}
