import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './proyectosemestral/usuario/login/login.component';
import { MenuAdministradorComponent } from './proyectosemestral/administrador/menu-administrador/menu-administrador.component';
import { CrearUsuarioComponent } from './proyectosemestral/administrador/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './proyectosemestral/administrador/listar-usuarios/listar-usuarios.component';
import { ModificarUsuarioComponent } from './proyectosemestral/administrador/modificar-usuario/modificar-usuario.component';
import { MenuProfesorComponent } from './proyectosemestral/profesor/menu-profesor/menu-profesor.component';
import { CrearCursoComponent } from './proyectosemestral/administrador/crear-curso/crear-curso.component';
import { ListarCursosComponent } from './proyectosemestral/administrador/listar-cursos/listar-cursos.component';
import { ModificarCursoComponent } from './proyectosemestral/administrador/modificar-curso/modificar-curso.component';
import { CrearActividadComponent } from './proyectosemestral/profesor/crear-actividad/crear-actividad.component';
import { ListarActividadesComponent } from './proyectosemestral/profesor/listar-actividades/listar-actividades.component';
import { ModificarActividadComponent } from './proyectosemestral/profesor/modificar-actividad/modificar-actividad.component';
import { ResponderActividadComponent } from './proyectosemestral/estudiante/responder-actividad/responder-actividad.component';
import { MenuEstudianteComponent } from './proyectosemestral/estudiante/menu-estudiante/menu-estudiante.component';
import { FormsModule} from '@angular/forms';
import { UsuarioViewComponent } from './proyectosemestral/administrador/usuario-view/usuario-view.component';
import { CursoViewComponent } from './proyectosemestral/administrador/curso-view/curso-view.component';
import { ActividadViewComponent } from './proyectosemestral/profesor/actividad-view/actividad-view.component';
import { ListarMisactividadesComponent } from './proyectosemestral/estudiante/listar-misactividades/listar-misactividades.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuAdministradorComponent,
    CrearUsuarioComponent,
    ListarUsuariosComponent,
    ModificarUsuarioComponent,
    MenuProfesorComponent,
    CrearCursoComponent,
    ListarCursosComponent,
    ModificarCursoComponent,
    CrearActividadComponent,
    ListarActividadesComponent,
    ModificarActividadComponent,
    MenuEstudianteComponent,
    ResponderActividadComponent,
    UsuarioViewComponent,
    CursoViewComponent,
    ActividadViewComponent,
    ListarMisactividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
