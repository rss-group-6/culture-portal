import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkLogRoutingModule } from './worklog-routing.module';

import { WorklogComponent } from './components/worklog/worklog.component';
import { MemberLogComponent } from './pages/member-log/member-log.component';
import { CarouselNavigationComponent } from './components/carousel-navigation/carousel-navigation.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '@shared/shared.module';

const ModuleTranslate = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [WorklogComponent, MemberLogComponent, CarouselNavigationComponent],
  imports: [CommonModule, WorkLogRoutingModule, ModuleTranslate, NgbModule, SharedModule],
})
export class WorkLogModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/worklog/', '.json');
}
