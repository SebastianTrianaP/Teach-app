import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../model/estudiante';
import { Profesor } from '../../../model/profesor';
import { Curso } from '../../../model/curso';
import { CursoServicioService } from '../../../servicios/curso-servicio.service';
import { Router } from '@angular/router';
import { ProfesorServicioService } from '../../../servicios/profesor-servicio.service';
import { EstudianteServicioService } from '../../../servicios/estudiante-servicio.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  nombre: string;
  profesores: Profesor[];
  estudiantes: Estudiante[];

  profesoresGeneral: Profesor[];
  estudiantesGeneral: Estudiante[];

  // tslint:disable-next-line: max-line-length
  constructor(private cursoService: CursoServicioService, private profesorService: ProfesorServicioService , private estudianteService: EstudianteServicioService , private router: Router) { }

  ngOnInit() {
    this.profesorService.findAllProfesores().subscribe(
      result => {this.profesoresGeneral = result;
                 result.forEach(profesor => {
        profesor.authorities = null;
      }); }
    );

    this.estudianteService.findAllEstudiantes().subscribe(
      result => {this.estudiantesGeneral = result;
                 result.forEach(estudiante => {
          estudiante.authorities = null;
        });
      }
    );
  }

  public crearCurso() {
    let curso: Curso;
    console.log(this.profesores);
    curso = new Curso(-1, this.nombre, this.profesores, this.estudiantes, []);
    this.cursoService.createCurso(curso).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/administrador/listar-cursos`]);
      }
    );
  }

}
