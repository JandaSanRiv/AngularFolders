import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { AvisosComponent } from './avisos/avisos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuLateralComponent,
    PiePaginaComponent,
    ContenidoPrincipalComponent,
    AvisosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
