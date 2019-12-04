import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './proyectosemestral/usuario/login/login.component';
import { MenuAdministradorComponent } from './proyectosemestral/administrador/menu-administrador/menu-administrador.component';
import { CrearUsuarioComponent } from './proyectosemestral/administrador/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './proyectosemestral/administrador/listar-usuarios/listar-usuarios.component';
import { ModificarUsuarioComponent } from './proyectosemestral/administrador/modificar-usuario/modificar-usuario.component';
import { CrearCursoComponent } from './proyectosemestral/administrador/crear-curso/crear-curso.component';
import { ListarCursosComponent } from './proyectosemestral/administrador/listar-cursos/listar-cursos.component';
import { MenuProfesorComponent } from './proyectosemestral/profesor/menu-profesor/menu-profesor.component';
import { CrearActividadComponent } from './proyectosemestral/profesor/crear-actividad/crear-actividad.component';
import { ListarActividadesComponent } from './proyectosemestral/profesor/listar-actividades/listar-actividades.component';
import { ModificarActividadComponent } from './proyectosemestral/profesor/modificar-actividad/modificar-actividad.component';
import { MenuEstudianteComponent } from './proyectosemestral/estudiante/menu-estudiante/menu-estudiante.component';
import { ResponderActividadComponent } from './proyectosemestral/estudiante/responder-actividad/responder-actividad.component';
import { UsuarioViewComponent } from './proyectosemestral/administrador/usuario-view/usuario-view.component';
import { CursoViewComponent } from './proyectosemestral/administrador/curso-view/curso-view.component';
import { ModificarCursoComponent } from './proyectosemestral/administrador/modificar-curso/modificar-curso.component';
import { ActividadViewComponent } from './proyectosemestral/profesor/actividad-view/actividad-view.component';
import { ListarMisactividadesComponent } from './proyectosemestral/estudiante/listar-misactividades/listar-misactividades.component';


const routes: Routes = [
{ path:"", component: LoginComponent},
{ path:"administrador/menu", component: MenuAdministradorComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/listar-usuarios", component: ListarUsuariosComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/ver-usuario", component: UsuarioViewComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/crear-usuario", component: CrearUsuarioComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/modificar-usuario", component: ModificarUsuarioComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/listar-cursos", component: ListarCursosComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/ver-curso", component: CursoViewComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/crear-curso", component: CrearCursoComponent}, //TODO: solo usuarios autenticados
{ path:"administrador/modificar-curso", component: ModificarCursoComponent}, //TODO: solo usuarios autenticados
{ path:"profesor/menu", component: MenuProfesorComponent}, //TODO: solo usuarios autenticados
{ path:"profesor/listar-actividades", component: ListarActividadesComponent},
{ path:"profesor/crear-actividad", component: CrearActividadComponent},
{ path:"profesor/ver-actividad", component: ActividadViewComponent}, //TODO: solo usuarios autenticados
{ path:"profesor/modificar-actividad", component: ModificarActividadComponent},
{ path:"estudiante/menu", component: MenuEstudianteComponent},
{ path:"estudiante/listar-misactividades", component: ListarMisactividadesComponent}, //TODO: solo usuarios autenticados
{ path:"estudiante/responder-actividad", component: ResponderActividadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
