import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

import { Producto } from '../classes/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() producto: string;
  @Input() precio: number;
  @Input() dato = 5;
  // @Output() totalEvent = new EventEmitter<number>();
  @Output() ordenFinalizada = new EventEmitter<number>();
  listaProds: object[] = [];
  total: number = 0;

  agregarProducto() {
    console.log("Agregar producto");
    console.log(this.producto + ", " + this.precio);
    if (this.producto.length > 0 && this.precio != null && this.precio > 0) {

      let producto = new Producto();
      producto.nombre = this.producto;
      producto.precio = this.precio;
      this.listaProds.push({ "nombre": this.producto, "precio": this.precio });
    }
  }


  calcularTotal() {
    this.total = 0;
    this.listaProds.forEach((prod) => {
      this.total += parseFloat(prod["precio"]);
    });
    // this.totalEvent.emit(this.total);
    return this.total;
  }
  finalizarOrden() {
    this.listaProds = [];
    this.ordenFinalizada.emit(this.total);
  }
  ngOnInit(): void {

    console.log("Inicializacion de listar productos");
  }

  ngOnDestroy() {

    console.log("destruccion de listar productos");

  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propiedad in changes)
      console.log(`-:-Lista-:- Propiedad modificada: ${propiedad}`)

      const cambios = changes['dato'];
      const viejoValor = cambios.previousValue;
      const nuevoValor = cambios.currentValue;
      console.log(`-:-dato-:- valia: ${viejoValor},  y ahora vale: ${nuevoValor}`);
  }

}
