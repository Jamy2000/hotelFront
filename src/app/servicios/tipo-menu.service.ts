import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoMenuService {

  constructor( private http:HttpClient) { }

  posttipomenu(data:any){
    return this.http.post<any>(' http://localhost:3000/api/creartipo_menu/', data);
  }

  gettipomenu(){
    return this.http.get<any>('http://localhost:3000/api/mostrartipo_menu/');
  }




}
