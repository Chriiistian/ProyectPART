import { NgModule, CUSTOM_ELEMENTS_SCHEMA    } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrincipalComponent } from './principal/principal.component';
//inicio carga py
import {CargarPythonService} from "./cargar-python.service";


//fin cargar py


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CargarPythonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
