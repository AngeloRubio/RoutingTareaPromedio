import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';

@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    Vista2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
