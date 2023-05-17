import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoMenuService } from 'src/app/servicios/tipo-menu.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlatoComponent } from '../plato/plato.component'; 
import { MatDialogRef } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-tipo-menu',
  templateUrl: './tipo-menu.component.html',
  styleUrls: ['./tipo-menu.component.css']
})
export class TipoMenuComponent {

  constructor(private TipoMenuService: TipoMenuService, private router: Router,private formBuilder: FormBuilder,public dialog: MatDialog, private dialogRef:MatDialogRef<PlatoComponent>) { }
  tipomenuForm!:FormGroup;
  dataSource = new MatTableDataSource<any>;
  abrirDialogo () {
    this.dialog.open(PlatoComponent, {
      width:'30%'
   }).afterClosed().subscribe(val=>{
    if (val=='save') {
      this.getAlltipomenu();
    }
   })
  }
 

  ngOnInit() {
    this.tipomenuForm= this.formBuilder.group({
      tipo: new FormControl("", Validators.minLength(1)),
 });
}

addtipomenu(){
  if (this.tipomenuForm.valid) {
    this.TipoMenuService.posttipomenu(this.tipomenuForm.value)
    .subscribe({
      next:(res)=>{
        alert("tipo menu registrado correctamente");
        this.tipomenuForm.reset();
        this.dialogRef.close('save');
       
      },
      error:()=>{
        alert("error al registrar tipo menu")
      }
    })


   
  } 
  
 }

  
 getAlltipomenu(){
  this.TipoMenuService.gettipomenu()
  .subscribe({
    next:(res)=>{
     // this.dataSource= new MatTableDataSource(res);
      this.dataSource = new MatTableDataSource(res.tipo_menus);
     
    },
    error:(err)=> {
      alert("Error en la carga de datos")
    },
  })
 }

}
 