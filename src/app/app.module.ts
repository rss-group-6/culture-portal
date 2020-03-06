import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { DirectorsModule } from './directors/directors.module';
import { WorklogModule } from './worklog/worklog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, DirectorsModule, WorklogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
