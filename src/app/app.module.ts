import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { NavUsuarioComponent } from './components/nav-usuario/nav-usuario.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarLibComponent } from './components/registrar-lib/registrar-lib.component';
import { PrestarComponent } from './components/prestar/prestar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeUsuarioComponent,
    HomeAdminComponent,
    NavUsuarioComponent,
    NavAdminComponent,
    RegistroComponent,
    LoginComponent,
    RegistrarLibComponent,
    PrestarComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
