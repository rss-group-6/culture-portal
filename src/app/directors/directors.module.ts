import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsRoutingModule } from './directors-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AllDirectorsComponent } from './pages/all-directors/all-directors.component';
import { DirectorCardComponent } from './components/director-card/director-card.component';

const ModuleTranslate = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [AllDirectorsComponent, DirectorCardComponent],
  imports: [CommonModule, DirectorsRoutingModule, ModuleTranslate],
  exports: [AllDirectorsComponent]
})
export class DirectorsModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/directors/', '.json');
}
