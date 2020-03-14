import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideRoutingModule } from './styleguide-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { StyleListComponent } from './pages/style-list/style-list.component';

const ModuleTranslate = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [StyleGuideComponent, StyleListComponent],
  imports: [CommonModule, StyleGuideRoutingModule, ModuleTranslate],
})
export class StyleGuideModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/styleguide/', '.json');
}
