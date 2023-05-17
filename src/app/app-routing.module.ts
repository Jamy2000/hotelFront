import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './paginas/persona/persona.component';
import { LoginComponent } from './paginas/login/login.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { PlatoComponent } from './paginas/plato/plato.component';
import { TipoMenuComponent } from './paginas/tipo-menu/tipo-menu.component';
import { ModoClienteComponent } from './paginas/modo-cliente/modo-cliente.component';
const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'persona', component: PersonaComponent},
  {path:'usuario', component: UsuarioComponent},
  {path:'cliente', component: ClienteComponent},
  {path:'plato', component: PlatoComponent},
  {path:'plato/:id', component: PlatoComponent},

  {path:'plato', component: PlatoComponent},

  {path:'tipomenu', component: TipoMenuComponent},
  {path:'modocliente', component: ModoClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 