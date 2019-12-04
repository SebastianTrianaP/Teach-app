import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';
import { Curso } from 'src/app/model/curso';
import { Actividad } from '../../../model/actividad';
import { ActividadServicioService } from '../../../servicios/actividad-servicio.service';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  curso: Curso;
  titulo: string;
  descripcion: string;
  fechaEntrega: string;
  actividad: Actividad;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private cursoService: CursoServicioService, private router: Router, private actividadService: ActividadServicioService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.cursoService.findCurso(params.id).subscribe(result => {
        console.log(result);
        this.curso = result;
      });
    });
  }

  public crearActividad() {
    this.actividad = new Actividad(-1, [], this.fechaEntrega, this.descripcion, this.titulo);
    this.actividadService.createActividad(this.actividad).subscribe(
      result => {
        console.log(result);
        this.actividad = result;
        this.actualizarCurso();
      }
    );
  }
  actualizarCurso() {
    this.curso.actividades.push(this.actividad);
    this.cursoService.update(this.curso).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/profesor/listar-actividades`], { queryParams: { id: this.curso.id } });
      }
    );
  }

}
