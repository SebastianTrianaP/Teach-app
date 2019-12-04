import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';
import { Curso } from 'src/app/model/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadServicioService } from 'src/app/servicios/actividad-servicio.service';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';

@Component({
  selector: 'app-modificar-actividad',
  templateUrl: './modificar-actividad.component.html',
  styleUrls: ['./modificar-actividad.component.css']
})
export class ModificarActividadComponent implements OnInit {

  actividad: Actividad;
  curso: Curso;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private actividadService: ActividadServicioService, private cursoService: CursoServicioService) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
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
  modificar() {
    this.actividadService.update(this.actividad).subscribe(
      result => {
        this.router.navigate([`/profesor/ver-actividad`],  { queryParams: { id: this.actividad.id, idCurso: this.curso.id } });
      }
    );
  }
}
