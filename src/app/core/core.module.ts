import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { DescriptionPortalComponent } from './components/description-portal/description-portal.component';
import { DirectorOfDayComponent } from './components/director-of-day/director-of-day.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GetRandomAuthorService } from './services/get-random-author.service';
import { Error404Component } from './components/error404/error404.component';
import { LanguageService } from '@core/services/language.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentfulService } from '@core/services/contentful.service';

const ModuleTranslate = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    DescriptionPortalComponent,
    DirectorOfDayComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    ModuleTranslate,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  exports: [SharedModule, HomePageComponent, HeaderComponent, TranslateModule],
  providers: [GetRandomAuthorService, LanguageService, ContentfulService],
})
export class CoreModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/core/', '.json');
}
