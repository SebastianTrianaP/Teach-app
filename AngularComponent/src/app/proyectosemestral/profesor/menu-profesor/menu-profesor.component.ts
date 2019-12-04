import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/model/profesor';
import { ProfesorServicioService } from '../../../servicios/profesor-servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';
import { UsuarioServicioService } from 'src/app/servicios/usuario-servicio.service';


@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.component.html',
  styleUrls: ['./menu-profesor.component.css']
})
export class MenuProfesorComponent implements OnInit {

  usuario: Profesor;
  cursos: Curso[];

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private cursosServicio: CursoServicioService, private profesorServicio: ProfesorServicioService, private usuarioService: UsuarioServicioService) { }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.profesorServicio.findProfesor(params.id).subscribe(result => {
          console.log(result);
          this.usuario = result;
          this.obtenerCursos();
        });
      });
  }

  obtenerCursos() {
    this.cursosServicio.findCursoByProfesor(this.usuario.id).subscribe(result => {
      console.log(result);
      this.cursos = result;
    });
  }


  public logout() {
    this.usuarioService.logout().subscribe(data => {
      this.router.navigate([``]);
    }, error => {
      console.error(error);
    });
  }

}
