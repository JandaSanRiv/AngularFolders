import { Component, OnInit } from '@angular/core';

import {NotesService} from '../notes.service'
import {Note} from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteService:NotesService) { }

  notes:Note[] =[];
  id:string;
  title:string;
  content:string;
  createdAt:string;
  updatedAt:string;

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes():void{
    this.noteService.getNotes().subscribe(notesArr =>{
      this.notes = notesArr;
    });
  }

  // addNote():void{

  //   var today = new Date();

  //   let note = new Note(this.id, this.title, this.content, today, today);
  //   this.noteService.addNote(note).subscribe((hi)=>{

  //     this.getNotes();
  //   });
  // }
  addNote():void{

    var today = new Date();

    let note = new Note(this.id, this.title, this.content, today, today);
    this.noteService.addNote(note).subscribe((result)=>{
      this.notes.push(result);
      // this.getNotes();
    });
    this.limpiarDatos();
  }

  editNote():void{
    let today = new Date;
    this.noteService.updateNote(this.id, {"_id": this.id,"title":this.title, "content":this.content, "updatedAt":today }).subscribe((respuesta)=>{
      console.log("Hola");
      this.getNotes();
      this.limpiarDatos();
    });
  }

  selectEdit(id:string, titulo:string, contenido:string){

    this.limpiarDatos();
    this.id = id;
    this.title = titulo;
    this.content = contenido;
  }

  deleteNote(id:string):void{
    this.noteService.deleteNote(id).subscribe((respuesta)=>{
      console.log("Le di en eliminar");
      this.getNotes();
    });
  }

  limpiarDatos(){
    this.id = '';
    this.title = '';
    this.content ='';
    this.createdAt='';
    this.updatedAt='';

  }

  // parseToDate

}
