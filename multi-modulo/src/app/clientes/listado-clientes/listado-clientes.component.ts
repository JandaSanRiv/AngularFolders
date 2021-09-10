import { Component, OnInit } from '@angular/core';
import{ClientesService} from '../clientes.service'

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  // private cs:ClientesService;

  constructor(private cs:ClientesService) {// se esta mandando como parametro // mediante esta opcion se esta utilizando Dependency Injection
    // this.cs = new ClientesService(); // Esto no es muy d Dependency Injection
   }

  clientes=[];

  ngOnInit(): void {
    this.clientes = this.cs.getClientes();
  }


}
