import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';
import { ActividadServicioService } from '../../../servicios/actividad-servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoServicioService } from '../../../servicios/curso-servicio.service';
import { Curso } from 'src/app/model/curso';

@Component({
  selector: 'app-actividad-view',
  templateUrl: './actividad-view.component.html',
  styleUrls: ['./actividad-view.component.css']
})
export class ActividadViewComponent implements OnInit {
  actividad: Actividad;
  curso: Curso;
  idProfe: number;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private actividadService: ActividadServicioService, private cursoService: CursoServicioService) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.idProfe = params.idProfe;
        this.actividadService.findActividad(params.id).subscribe(result => {
          console.log(result);
          this.actividad = result;
          this.encontrarCurso();
        });
      });
  }
  encontrarCurso() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.cursoService.findCurso(params.idCurso).subscribe(result => {
        console.log(result);
        this.curso = result;
      });
    });
  }
  public eliminarActividad() {
    this.curso.actividades.forEach(actividadCurso => {
      if (this.actividad.id === actividadCurso.id) {
        this.curso.actividades.push(actividadCurso);
      }
    });
    this.cursoService.update(this.curso).subscribe(
      result => {
        this.eliminarActividadActual();
      }
    );
  }
  private eliminarActividadActual() {
    this.actividadService.delete(this.actividad.id).subscribe(
      result => {
        this.router.navigate([`/profesor/listar-actividades`],  { queryParams: { id: this.curso.id } });
      }
    );
  }
}
