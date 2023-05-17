import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http:HttpClient) { }

  postpersona(data:any){
    return this.http.post<any>('http://localhost:3000/api/crearPersona/', data);
  }

  getpersona(){
    return this.http.get<any>('http://localhost:3000/api/mostrarpersona/');
  }



}
