import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoFacturasComponent } from './listado-facturas/listado-facturas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListadoFacturasComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListadoFacturasComponent
  ]
})
export class FacturasModule { }
