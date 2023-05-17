import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatoService } from 'src/app/servicios/plato.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent {
  id:string = '';
  descripcion:string = ''; 

  id_tipomenu:string = '';
  tipomenusss:any[] = []; 
  actionBtn:string='Guardar'
  dataSource = new MatTableDataSource<any>;
  constructor(private http:HttpClient,@Inject (MAT_DIALOG_DATA) public editData:any,private PlatoService: PlatoService, private router: Router,private formBuilder: FormBuilder,private dialogRef:MatDialogRef<PlatoComponent>) {
    this.loadTipomenu();
  
    
   }
 
   loadTipomenu(){
    this.http
    .get("http://localhost:3000/api/mostrartipo_menu/").subscribe((result:any)=>{
      this.tipomenusss= result.tipo_menus;
    })
   }
 
   
   //Parar Guardar el id del combo selection-------------------------------------------------------


getId_Tipomenu(){
  this.http
    .get("http://localhost:3000/api/creartipo_menu?="+this.id_tipomenu).subscribe((result:any)=>{
      this.tipomenusss= result.platos;
    })

}


menuForm!:FormGroup;
 

 
  ngOnInit() {
    this.menuForm= this.formBuilder.group({
    
      descripcion: new FormControl("", Validators.minLength(3)),
      id_tipomenu: new FormControl("",Validators.maxLength(1)),

 });
if (this.editData) {
  this.actionBtn="Editar";
  this.menuForm.controls['descripcion'].setValue(this.editData.descripcion) ;
  this.menuForm.controls['id_tipomenu'].setValue(this.editData.id_tipomenu) ;
}
}

  
   addPlato(){
    if (!this.editData) {
      if (this.menuForm.valid) {
        this.PlatoService.postplato(this.menuForm.value)
        .subscribe({
         
          next:(res)=>{
           
  
            
            alert("plato registrado correctamente");
            this.getAllplato();
            this.menuForm.reset();
            this.dialogRef.close('save');
            
          },
          error:()=>{
            alert("error al registrar plato")
          }
        })
  
  
       
      }  
      this.loadTipomenu();
    } else {
      this.editarPlato()
    }

    
   } 

   editarPlato(){
    this.PlatoService.putplato(this.menuForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("plato modificado correctamente");
        this.menuForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("error al modificar plato")
      }
    })

   }

   getAllplato(){
    this.PlatoService.gettplato()
    .subscribe({
      next:(res)=>{
       // this.dataSource= new MatTableDataSource(res);
        this.dataSource = new MatTableDataSource(res.platos);
       
      },
      error:(err)=> {
        alert("Error en la carga de datos")
      },
    })
   }

 
   
  }