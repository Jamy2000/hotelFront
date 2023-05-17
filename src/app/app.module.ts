import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './paginas/persona/persona.component';
import { LoginComponent } from './paginas/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { objectoArrayPipe } from './objectoArray.pipe';
import { TipoMenuComponent } from './paginas/tipo-menu/tipo-menu.component';
import { PlatoComponent } from './paginas/plato/plato.component';
import {MatTableModule} from '@angular/material/table';
import { ModoClienteComponent } from './paginas/modo-cliente/modo-cliente.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    LoginComponent,
    UsuarioComponent,
    ClienteComponent,
    objectoArrayPipe,
    TipoMenuComponent,
    PlatoComponent,
    ModoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
