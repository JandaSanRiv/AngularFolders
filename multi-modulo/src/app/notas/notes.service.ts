import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import{Note} from '../models/note'

const httpOptions ={
  headers:new HttpHeaders({
    "Content-Type" : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { }//Inyeccion de dependencias

  private url = "http://localhost:3000/notes";

  getNotes(): Observable<Note[]>{
    let notes:Observable<Note[]>;
    notes = this.httpClient.get<Note[]>(this.url).pipe(
      catchError(this.handleError));
      console.log(notes);
      return notes;
  }

  addNote(note:Note):Observable<Note>{
    return this.httpClient.post<Note>(this.url, note, httpOptions).pipe(
      catchError(this.handleError));
  }

  // updateNote(note:Note):Observable<Note>{
  //   return this.httpClient.put<Note>(this.url, note, httpOptions).pipe(
  //     catchError(this.handleError));
  // }
  updateNote(id:string, data:object):Observable<Note>{
    let updateUrl = `${this.url}/${id}`;
    return this.httpClient.put<Note>(updateUrl, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteNote(id:string):Observable<unknown>{
    let deleteUrl = `${this.url}/${id}`;
    return this.httpClient.delete(deleteUrl, httpOptions).pipe(
      catchError(this.handleError));
  }


  handleError(error:HttpErrorResponse){// funcion basica para manejo de errores // se sugiere investigar sobre el tema de Interceptors en Angular
    let mensaje ="Error desconocido";
    // Los errores pueden ser Client Side HTTP 400 o Server Side 500
    if(error.error instanceof ErrorEvent){//Client-Side Error
      mensaje =`Error: ${error.error.message}`;
    }
    else{
      mensaje = `Error: ${error.status} ${error.message}`;
    }
    console.log(mensaje);
    return throwError(mensaje);
  }

}
