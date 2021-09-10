import { Component } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  name ="Alma Alejandra Sanchez Rivera";


  saludos(){
    console.log("Hola");// no funciona
  }
}
// eesto yo lo hice, pero el profe no lo hizo, no se si tenga utilidad
// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu/menu.component.html',
//   styleUrls: ['./menu/menu.component.css']
// })
// export class MenuComponent {
//   title = 'todo';
//   name ="Alma Alejandra Sanchez Rivera"
