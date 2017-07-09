// Libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Waterline components
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { ReportService } from './report/report.service';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
