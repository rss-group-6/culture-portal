import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkLogRoutingModule } from './worklog-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const ModuleTranslate = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [],
  imports: [CommonModule, WorkLogRoutingModule, ModuleTranslate],
})
export class WorkLogModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/worklog/', '.json');
}
