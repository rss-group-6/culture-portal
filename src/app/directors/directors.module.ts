import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsRoutingModule } from './directors-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AllDirectorsComponent } from './pages/all-directors/all-directors.component';
import { DirectorCardComponent } from './components/director-card/director-card.component';
import { SearchService } from './services/search.service';
import { SharedModule } from '@shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchByParamPipe } from './pipes/search-by-param.pipe';

const ModuleTranslate = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [AllDirectorsComponent, DirectorCardComponent, SearchComponent, SearchByParamPipe],
  imports: [CommonModule, DirectorsRoutingModule, ModuleTranslate, SharedModule, ReactiveFormsModule],
  exports: [AllDirectorsComponent],
  providers: [SearchService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DirectorsModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/directors/', '.json');
}
