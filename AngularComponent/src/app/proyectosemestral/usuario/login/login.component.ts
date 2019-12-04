import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AdministradorServicioService } from '../../../servicios/administrador-servicio.service';
import { Router } from '@angular/router';
import { UsuarioServicioService } from 'src/app/servicios/usuario-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  urlMenu: string;
  email: string;
  contra: string;

  constructor(private usuarioServicio: UsuarioServicioService, private router: Router) { }

  ngOnInit() {
  }

  public login() {

    this.usuarioServicio.findUserByEmail(this.email).subscribe(
      data => { this.usuario = data;
                this.acceso();
      }
    );


  }
  public acceso() {

    this.usuarioServicio.login(this.email, this.contra).subscribe(
      data => { if (this.usuario.rol === 'Administrador') {
                   this.urlMenu = '/administrador/menu/';
                   this.router.navigate([this.urlMenu], { queryParams: { id: this.usuario.id } });
                }
                if (this.usuario.rol === 'Profesor') {
                   this.urlMenu = '/profesor/menu/';
                   this.router.navigate([this.urlMenu], { queryParams: { id: this.usuario.id } });
                }
                if (this.usuario.rol === 'Estudiante') {
                  this.urlMenu = '/estudiante/menu/';
                  this.router.navigate([this.urlMenu], { queryParams: { id: this.usuario.id } });
                }
  }
    );
  }

}
