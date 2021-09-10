import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


//Forma 1
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { ListadoPostsComponent } from './clientes/listado-posts/listado-posts.component';
import { NotesComponent } from './notas/notes/notes.component';
import { AgregarNotaComponent } from './notas/agregar-nota/agregar-nota.component';
// import { RouterModule } from '@angular/router';
const routes: Routes =[
  {path:'Clientes', component:ListadoClientesComponent},
  {path:'Facturas', component:ListadoFacturasComponent},
  {path:'Posts', component:ListadoPostsComponent},
  {path:'Notas', component:NotesComponent},
  {path:'AgregarNota', component:AgregarNotaComponent}
];



//forma 2
// import { NotesComponent } from './notas/notes/notes.component';
// import { UnoComponent } from './uno/uno.component';


// const routes: Routes = [
//   {path:'notas', component:NotesComponent},
//   // {path:'dos', component:DosComponent}
// ];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    // CommonModule,
    exports: [RouterModule]
})
export class AppRoutingModule { }
