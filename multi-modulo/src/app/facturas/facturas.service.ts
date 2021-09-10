import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  facturas:Factura[] =[];
  constructor() {
    this.facturas =[
      {id:1, fecha:'08/09/2021', cliente:1, monto:40},
      {id:2, fecha:'08/09/2021', cliente:3, monto:460},
      {id:3, fecha:'08/09/2021', cliente:2, monto:90}
    ];
  }
  getFacturas():Factura[]{
    return this.facturas;
  }
  agregarFactura(factura:Factura){
    try{

      this.facturas.push(factura);
      return true;
    }catch(Exception){
      return false;
    }
  }
  searchFactura(id:number){
    console.log("recibi el id "+id);
    let existe= false;
    this.facturas.forEach((factura)=>{
        console.log(factura.id)
        if(factura.id== id) {existe = true; return;}
    });
    return existe;
  }
}
