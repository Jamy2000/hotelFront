import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient) { }

  postusuario(data:any){
    return this.http.post<any>('http://localhost:3000/api/crearUsuario/', data);
    
  }

  getTipoUsuario(){
    return this.http.get<any>('http://localhost:3000/api/mostrartipo_usuario/');
  }




 
}

 