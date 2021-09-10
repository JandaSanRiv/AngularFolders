import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import {FacturasService} from '../facturas.service';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  constructor(private fc:FacturasService) { }
  id:number=0;
  fecha:string='01/01/0001';
  cliente:number=0;
  monto:number=0;
  idFactS:number=0;
  idFac:string='';

  facturas=[];

  agregarFacturas(){
    let factura:Factura={id:this.id, fecha: this.fecha.replace("-","/"), cliente: this.cliente, monto: this.monto};

    let agregado = this.fc.agregarFactura(factura);
    console.log('Se agrego la factura? '+agregado)
    this.facturas = this.fc.getFacturas();
  }
  buscarFactura(){
    console.log("le mandee id "+this.idFactS)
    let existe =  this.fc.searchFactura(parseInt(this.idFac));
    console.log("Existe la factura? "+existe);
  }
  ngOnInit(): void {
    this.facturas = this.fc.getFacturas();
  }

}
