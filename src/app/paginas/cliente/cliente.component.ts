import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlatoComponent } from '../plato/plato.component';
import { Plato } from 'src/app/modelos/plato.model';
import { PlatoService } from 'src/app/servicios/plato.service';
import { HttpClient } from '@angular/common/http';
import { TipoMenuComponent } from '../tipo-menu/tipo-menu.component';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  id:string = '';
  id_tipomenu:string = ''; 
  descripcion:string = ''; 
  listatipomenusss:any[] = [];
  dataSource = new MatTableDataSource<any>;

  constructor(public dialog: MatDialog, private PlatoService:PlatoService,private http:HttpClient) {
    //this.ngOnInit();
    this.loadtipomenu();
  } 

  abrirDialogo () {
    this.dialog.open(TipoMenuComponent, {
      width:'30%'
   }).afterClosed().subscribe(val=>{
    if (val=='save') {
      this.getAllplato();
    }
   })
  }
  editarplato (listatipomenu:any) {
    this.dialog.open(PlatoComponent, {
      width:'30%',
      data:listatipomenu
   }).afterClosed().subscribe(val=>{
    if (val=='save') {
      this.getAllplato();
    }
   })
  }
  
  loadtipomenu(){
    this.http
    .get("http://localhost:3000/api/mostrarplato/").subscribe((resultado:any)=>{
      this.listatipomenusss= resultado.platos;
    })
   }


   editarplatometodo(element:any){
    this.dialog.open(PlatoComponent,{
      width:'30%',
      data:element
    }).afterClosed().subscribe(val=>{
      if (val=='update') {
        this.getAllplato();
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

   

   eliminarPlato(id:number){
    this.PlatoService.deleteplato(id)
    .subscribe({
      next:(res)=>{
        alert("Plato eliminado correctamente");
        this.getAllplato();
        
      },
      error:()=> {
        alert("Error al eliminar plato")
      },
    })
    
 


   
   }

}
