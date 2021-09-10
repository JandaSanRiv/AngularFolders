import { Injectable } from '@angular/core';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'//aqui se indica que es inyectable
})
export class ClientesService {

  constructor() { }

  getClientes():Cliente[]{
    return [
      {id:1, name:'Cliente 1', email:'Cliente1@gmail.com'},
      {id:2, name:'Cliente 2', email:'Cliente2@gmail.com'},
      {id:3, name:'Cliente 3', email:'Cliente3@gmail.com'}
    ]
  }
}
