import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CurrentCasesComponent } from './current-cases/current-cases.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CurrentCasesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
