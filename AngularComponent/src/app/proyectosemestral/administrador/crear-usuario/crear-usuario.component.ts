import { Component, OnInit } from '@angular/core';
import { AdministradorServicioService } from 'src/app/servicios/administrador-servicio.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/model/profesor';
import { Estudiante } from 'src/app/model/estudiante';
import { Administrador } from '../../../model/administrador';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  nombre: string;
  apellidos: string;
  email: string;
  contra: string;
  rol: string;


  constructor(private usuarioService: AdministradorServicioService, private router: Router) { }

  ngOnInit() {
  }

  public crearUsuario() {
    if (this.rol === 'Profesor' ) {
      let usuario: Profesor;
      usuario = new Profesor(-1, this.nombre, this.apellidos, this.email, this.contra, this.rol);

      this.usuarioService.createProfe(usuario).subscribe(
        result => {
          console.log(result);
          this.router.navigate([`/administrador/listar-usuarios`]);
        }
      );
    } else if (this.rol === 'Estudiante' ) {
      let usuario: Estudiante;
      usuario = new Estudiante(-1, this.nombre, this.apellidos, this.email, this.contra, this.rol, []);

      this.usuarioService.createEstudiante(usuario).subscribe(
        result => {
          console.log(result);
          this.router.navigate([`/administrador/listar-usuarios`]);
        }
      );
    } else {
      let usuario: Administrador;
      usuario = new Administrador(-1, this.nombre, this.apellidos, this.email, this.contra, this.rol);

      this.usuarioService.createAdmin(usuario).subscribe(
        result => {
          console.log(result);
          this.router.navigate([`/administrador/listar-usuarios`]);
        }
      );
    }
  }

}
