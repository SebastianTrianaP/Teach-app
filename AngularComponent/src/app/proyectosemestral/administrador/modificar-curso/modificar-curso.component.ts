import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoServicioService } from '../../../servicios/curso-servicio.service';
import { Profesor } from 'src/app/model/profesor';
import { Estudiante } from 'src/app/model/estudiante';
import { ProfesorServicioService } from '../../../servicios/profesor-servicio.service';
import { EstudianteServicioService } from '../../../servicios/estudiante-servicio.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {

  curso: Curso;
  profesoresGeneral: Profesor[];
  estudiantesGeneral: Estudiante[];

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private cursoService: CursoServicioService, private profesorService: ProfesorServicioService, private estudianteService: EstudianteServicioService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.cursoService.findCurso(params.id).subscribe(result => {
        this.curso = result;
      });
    });

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

  public modificarCurso() {
    console.log(this.curso);
    this.cursoService.update(this.curso).subscribe(
      result => {
        this.router.navigate([`/administrador/listar-cursos`]);
      }
    );
  }

}
