import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { DescriptionPortalComponent } from './components/description-portal/description-portal.component';

@NgModule({
  declarations: [HeaderComponent, HomePageComponent, DescriptionPortalComponent],
  imports: [CommonModule, SharedModule, NgbModule],
  exports: [SharedModule, HomePageComponent, HeaderComponent]
})
export class CoreModule {}
