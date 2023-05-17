import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor( private http:HttpClient) { }

  postplato(data:any){
    return this.http.post<any>(' http://localhost:3000/api/crearplato/', data);
    
  }

  gettplato(){
    return this.http.get<any>(' http://localhost:3000/api/mostrarplato/');
    
  }

putplato(data:any, id:number){
  return this.http.put<any>('http://localhost:3000/api/editarplato/'+id,data);
}

deleteplato(id:number){
  return this.http.delete<any>('http://localhost:3000/api/eliminarplato/'+id);
}

}