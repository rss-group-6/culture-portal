import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DetailedInformationRoutingModule } from './detailed-information.routing.module';
import { DetailesComponent } from './pages/detailes/detailes.component';
import { SharedModule } from '@shared/shared.module';
import { DirectorService } from './services/director.service';
import { MapComponent } from './components/map/map.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { ListOfWorksComponent } from './components/list-of-works/list-of-works.component';
import { VideosComponent } from './components/videos/videos.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { TimelineComponent } from './components/timeline/timeline.component';
import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { GalleryComponent } from './components/gallery/gallery.component';

const ModuleTranslate = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
});

@NgModule({
  declarations: [
    DetailesComponent,
    MapComponent,
    ListOfWorksComponent,
    VideosComponent,
    TimelineComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DetailedInformationRoutingModule,
    ModuleTranslate,
    AngularYandexMapsModule.forRoot('cd6bd965-79c3-43d5-8d3c-e729092ed0d3'),
    YouTubePlayerModule,
    MglTimelineModule,
  ],
  providers: [DirectorService],
})
export class DetailedInformationModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/directors/', '.json');
}
