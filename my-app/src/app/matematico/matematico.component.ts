import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {
  title: string = "Calculos Matematicos";
  operacion: string = "suma";
  resultado: number = 0;
  num1: number = 0;
  num2: number = 0;
  signo: string = "+"
  estaSeleccionado: boolean = false;
  operaciones:string[] = ["suma", "resta", "multiplicacion", "division"]; 
  operacionesJSON:object[] = [{id:"suma", text:"Sumar"}, {id:"resta", text:"Restar"}, {id:"multiplicacion", text:"Multiplicar"}, {id: "division", text:"Dividir"}]; 
  today = new Date();

  userName:string = 'alma';

  constructor() { }
  checkboxChanged() {
    // console.log("Se activo el evento...")
  }

  calcular() {
    if (this.num1 == null || this.num2 == null)
      return;

    switch (this.operacion) {
      case "suma":
        this.signo = "+";
        this.resultado = this.num1 + this.num2;
        break;
      case "resta":
        this.signo = "-";
        this.resultado = this.num1 - this.num2;
        break;
      case "multiplicacion":
        this.signo = "*";
        this.resultado = this.num1 * this.num2;
        break;
      case "division":
        this.signo = "/";
        this.resultado = this.num1 / this.num2;
        break;

    }
  }

  limpiarCajas(){
    this.num1=0;
    this.num2 =0;
    this.calcular();
  }

  ngOnInit(): void {
  }

}
