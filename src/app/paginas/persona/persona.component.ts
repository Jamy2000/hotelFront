import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsuarioComponent } from '../usuario/usuario.component';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  
  constructor(private PersonaService: PersonaService, private router: Router,private formBuilder: FormBuilder,public dialog: MatDialog, private dialogRef:MatDialogRef<PersonaComponent>) { }
  
  personaForm!:FormGroup;
  abrirDialogo () {
    this.dialog.open(UsuarioComponent, {
      width:'30%'
   });
  }

  ngOnInit() {
    this.personaForm= this.formBuilder.group({
      nombre: new FormControl("", Validators.minLength(3)),
      email: new FormControl("",Validators.maxLength(100)),
      telefono: new FormControl("",Validators.minLength(10)),
      foto: new FormControl("",Validators.maxLength(100)),
 });
}

 
   addPersona(){
    if (this.personaForm.valid) {
      this.PersonaService.postpersona(this.personaForm.value)
      .subscribe({
        next:(res)=>{
          alert("Persona registrada correctamente");
          this.personaForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("error al registrar persona")
        }
      })


     
    } 
   }


}
