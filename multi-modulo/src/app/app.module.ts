import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import{ListadoClientesComponent} from './clientes/listado-clientes/listado-clientes.component'
import {ClientesModule} from './clientes/clientes.module';
import {FacturasModule} from './facturas/facturas.module';
import {NotasModule} from './notas/notas.module';


import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    FacturasModule,
    NotasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
