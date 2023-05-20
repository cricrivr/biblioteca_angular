import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavUsuarioComponent } from './components/nav-usuario/nav-usuario.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistrarLibComponent } from './components/registrar-lib/registrar-lib.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { PrestarComponent } from './components/prestar/prestar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [

  { path: 'nav-usuario', component: NavUsuarioComponent },
  { path: 'nav-admin', component: NavAdminComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'home-usuario', component: HomeUsuarioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registrar-libro', component: RegistrarLibComponent },
  { path: 'login', component: LoginComponent },
  { path: 'prestar', component: PrestarComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
