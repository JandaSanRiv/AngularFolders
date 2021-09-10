import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matematico-result',
  templateUrl: './matematico-result.component.html',
  styleUrls: ['./matematico-result.component.css']
})
export class MatematicoResultComponent implements OnInit {

  constructor() { }

  @Input() resultadoAMostrar: number;// valor recibido desde el exterior

  @Input() otroDatoDeEntrada:string;
  @Output() limpiarCajas = new EventEmitter();

  ngOnInit(): void {
  }

}
