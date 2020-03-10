import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersRoutingModule } from './team-members-routing.module';
import { DeveloperItemComponent } from './components/developer-item/developer-item.component';
import { DevelopersListComponent } from './pages/developers-list/developers-list.component';
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
  declarations: [DevelopersListComponent, DeveloperItemComponent],
  imports: [CommonModule, TeamMembersRoutingModule, ModuleTranslate],
  exports: [DevelopersListComponent],
})
export class TeamMembersModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/team-members/', '.json');
}

