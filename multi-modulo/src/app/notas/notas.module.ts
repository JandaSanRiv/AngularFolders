import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';


@NgModule({
  declarations: [NotesComponent, AgregarNotaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    NotesComponent
  ]
})
export class NotasModule { }
