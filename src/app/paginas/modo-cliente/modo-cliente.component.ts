import { Component ,ViewChild} from '@angular/core';
import { TipoMenuComponent } from '../tipo-menu/tipo-menu.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlatoService } from 'src/app/servicios/plato.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PlatoComponent } from '../plato/plato.component';

@Component({
  selector: 'app-modo-cliente',
  templateUrl: './modo-cliente.component.html',
  styleUrls: ['./modo-cliente.component.css']
})
export class ModoClienteComponent  {

  
  displayedColumns: string[] = ['id', 'id_tipomenu', 'descripcion', 'accion'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  //@Inject (MAT_DIALOG_DATA) public editData:any,
  id:string = '';
  id_tipomenu:string = ''; 
  descripcion:string = ''; 
  listatipomenusss:any[] = [];
  tipomenusss:any[] = []; 

  constructor(public dialog: MatDialog, private PlatoService:PlatoService,
    private http:HttpClient,private formBuilder: FormBuilder) {
    //this.ngOnInit();
    this.getAllplato();
    this.loadplato();
   
  }   

  abrirDialogo () {
    this.dialog.open(PlatoComponent, {
      width:'30%'
   }).afterClosed().subscribe(val=>{
    if (val=='save') {
      this.getAllplato();
    }
   })
  }
 


  loadplato(){
    this.http
    .get("http://localhost:3000/api/mostrarplato/").subscribe((resultado:any)=>{
      this.listatipomenusss= resultado.platos;
    })
    this.getAllplato();
   }

   editarplato(element:any){
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
        this.dataSource.paginator= this.paginator;
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
