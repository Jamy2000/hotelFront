import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PersonaComponent } from '../persona/persona.component';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 

  constructor(public dialog: MatDialog) {}


  abrirDialogo () {
    this.dialog.open(PersonaComponent, {
      width:'30%'
   });
  }

  //borrar esto despues
  abrirDialogoUsuario () {
    this.dialog.open(UsuarioComponent, {
      width:'30%'
   });
  }

}
