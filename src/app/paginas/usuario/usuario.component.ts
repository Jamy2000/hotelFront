import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { HttpClient } from '@angular/common/http';


import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  


  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
hide = true;
id:string = '';
usuario:string = ''; 
contrasena:string = '';

id_tipousuario:string = '';
id_persona:string = '';
personassss:any[] = [];
tipo_usuariosss:any[] = [];


 


 
  constructor(private http:HttpClient,private UsuarioService: UsuarioService,private router: Router,private formBuilder: FormBuilder, private PersonaService:PersonaService, private dialogRef:MatDialogRef<UsuarioComponent>) {
    this.loadTipoUsuarios();
    this.loadPersonas();
    
    
   }

   
   //Parar cargar el combo selection-------------------------------------------------------
   loadTipoUsuarios(){
    this.http
    .get("http://localhost:3000/api/mostrartipo_usuario/").subscribe((result:any)=>{
      this.tipo_usuariosss= result.tipo_Usuarios;
    })
   }
   
   

   loadPersonas(){
    this.http
    .get("http://localhost:3000/api/mostrarpersona/").subscribe((resultado:any)=>{
      this.personassss= resultado.personas;
    })
   }
  
//-------------------------------------------------------------------------------------------
  



   //Parar Guardar el id del combo selection-------------------------------------------------------


getId_TipoUsuario(){
  this.http
    .get("http://localhost:3000/api/creartipo_usuario?="+this.id_tipousuario).subscribe((result:any)=>{
      this.tipo_usuariosss= result.crearUsuario;
    })

}

getId_Persona(){
  this.http
    .get("http://localhost:3000/api/creartipo_usuario?="+this.id_persona).subscribe((resultado:any)=>{
      this.personassss= resultado.crearUsuario;
    })

}

//-------------------------------------------------------------------------------------------



usuarioForm!:FormGroup;
 

 
  ngOnInit() {
    this.usuarioForm= this.formBuilder.group({
    
      usuario: new FormControl("", Validators.minLength(3)),
      contrasena: new FormControl("",Validators.maxLength(20)),
      id_tipousuario: new FormControl("",Validators.minLength(1)),
      id_persona: new FormControl("",Validators.maxLength(1)),

 });
}

  
   addUsuario(){
    if (this.usuarioForm.valid) {
      this.UsuarioService.postusuario(this.usuarioForm.value)
      .subscribe({
       
        next:(res)=>{

          
          alert("Usuario registrado correctamente");
          this.usuarioForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("error al registrar usuario")
        }
      })


     
    }  
   }

  



}
