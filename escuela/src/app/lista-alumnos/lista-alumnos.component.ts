import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

import {Alumno} from '../classes/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaALumnos:Alumno[] =[];
  tiposSalidas = [{id:"rbTabla", text:"Tabla", checked:true},{id: "rbLista", text:"Lista", checked:false}];
  today = new Date();
  salidaActual:string="rbTabla";
  constructor() { }

  revisarValor(){
    console.log(this.salidaActual)
  }

  ngOnInit(): void {

    // let alumno1:Alumno;

    // alumno1 = new Alumno('Luis', 'Sanchez', 'Luis@gmail.com', '30/08/2021');
    this.listaALumnos.push(new Alumno('Luis', 'Sanchez Lopez', 'Luis@gmail.com', '08/30/2021'));
    this.listaALumnos.push(new Alumno('Alma', 'Sanchez Rivera', 'almasan@gmail.com', '12/02/2019'));
    this.listaALumnos.push(new Alumno('Francisco', 'Robles Montes', 'pancho_pantera@gmail.com', '02/12/2020'));
    this.listaALumnos.push(new Alumno('Edgar', 'Ocampo Morales', 'edgarin_12@gmail.com', '07/05/2018'));
    this.listaALumnos.push(new Alumno('Diana', 'Mondragon Lopez', 'diana_mon@gmail.com', '09/15/2017'));
  }

  // cambiarSalida(){
  //   this.salidaActual
  // }
}
