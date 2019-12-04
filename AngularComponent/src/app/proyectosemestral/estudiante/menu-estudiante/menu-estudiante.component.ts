import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServicioService } from 'src/app/servicios/usuario-servicio.service';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';
import { EstudianteServicioService } from 'src/app/servicios/estudiante-servicio.service';
import { Estudiante } from '../../../model/estudiante';
import { Curso } from 'src/app/model/curso';

@Component({
  selector: 'app-menu-estudiante',
  templateUrl: './menu-estudiante.component.html',
  styleUrls: ['./menu-estudiante.component.css']
})
export class MenuEstudianteComponent implements OnInit {

  usuario: Estudiante;
  cursos: Curso[];
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private cursosServicio: CursoServicioService, private estudianteServicio: EstudianteServicioService, private usuarioService: UsuarioServicioService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.estudianteServicio.findEstudiante(params.id).subscribe(result => {
        console.log(result);
        this.usuario = result;
        this.obtenerCursos();
      });
    });
  }

  public obtenerCursos() {
    this.cursosServicio.findCursoByEstudiante(this.usuario.id).subscribe(result => {
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
