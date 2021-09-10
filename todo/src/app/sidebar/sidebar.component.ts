import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  dato1:string ="Dato del side Component";
  idSideName:string = "valor del id"
  idSide:number =3;
  opciones:string[]=["Fragancias", "Desodorantes", "Cremas faciales", "Maquillaje"]
  estaSeleccionado:boolean = false;
  constructor() { }

  //Controla las clases que se van a aplicar para quien este configurado con class misClases
  misClasses = {
    seleccionado: true,
    otro : true
    };

    checkboxChanged(){
      console.log("Se activo el evento...")
    }

  ngOnInit(): void {
  }

}
