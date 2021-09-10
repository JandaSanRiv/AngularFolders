import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

import { Post } from '../models/post';


const httpOptions ={
  headers:new HttpHeaders({
    "Content-Type" : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }// Por inyeccion de dependencias agrego el objeto HtthpClient

  private url = "https://jsonplaceholder.typicode.com/posts";


  getPosts(): Observable<Post[]> {
    let posts: Observable<Post[]>;
    posts = this.httpClient.get<Post[]>(this.url).pipe(
      catchError(this.handleError));// el resultado lo traera en un arreglo de Posts, se asignara a la Coleccion Observable de Post[]

    return posts;
  }

  addPost(post:Post):Observable<Post>{
    return this.httpClient.post<Post>(this.url, post, httpOptions).pipe(
      catchError(this.handleError));

  }

  updatePost(id:number, post:Post):Observable<Post>{
    let updateUrl = `${this.url}/${id}`;
    return this.httpClient.put<Post>(updateUrl, post, httpOptions).pipe(
      catchError(this.handleError));
  }

  deletePost(id:number):Observable<unknown>{
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
