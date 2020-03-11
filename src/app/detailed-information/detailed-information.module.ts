import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DetailedInformationRoutingModule } from './detailed-information.routing.module';
import { DetailesComponent } from './pages/detailes/detailes.component';
import { SharedModule } from '@shared/shared.module';
import { DirectorService } from './services/director.service';

const ModuleTranslate = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [DetailesComponent],
  imports: [CommonModule, SharedModule, DetailedInformationRoutingModule, ModuleTranslate],
  providers: [DirectorService],
})
export class DetailedInformationModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/directors/', '.json');
}
