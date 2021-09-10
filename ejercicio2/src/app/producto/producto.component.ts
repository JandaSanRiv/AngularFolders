import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, OnChanges {

  producto:string="";
  precio:number=0;
  listaProductos:string[]=[];
  @Output() agregarProducto = new EventEmitter();
  // @Input() total:number=0;
  total:number=0;
  constructor() {
    console.log('Se ejecuto el constructor de productos')
   }


  orderFinalizadaHandler($event){
    this.total = $event;
    alert(`Orden enviada\n Su pago fue de $${this.total} `);
    this.producto='';
    this.precio=0;

  }
  totalEventHandler($event){
    this.total = $event;
  }
// Aqui se pueden Inicializar variables 
  ngOnInit(): void {
    console.log("Inicializacion de productos")
  }
  
  ngOnDestroy(){
    
    console.log("destruccion de productos");

  }
  //este no ha tenido cambios, los cambios que se monitorean son los tipo @Input, en este caso estan en los hijos
  ngOnChanges(changes: SimpleChanges) {
    for(const propiedad in changes)
    console.log(`-:-Producto-:- Propiedad modificada: ${propiedad}`)
    }

}
