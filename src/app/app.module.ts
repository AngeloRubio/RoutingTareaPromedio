import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FiltroPipe } from './models/filtro.pipe';
import { FormsModule } from '@angular/forms';
import { EstudianteService } from './estudiante.service';


@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    Vista2Component,
    NavbarComponent,
    FooterComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
