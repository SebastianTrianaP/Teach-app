import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../../../model/respuesta';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/model/actividad';
import { Estudiante } from 'src/app/model/estudiante';
import { ActividadServicioService } from 'src/app/servicios/actividad-servicio.service';
import { RespuestaServicioService } from '../../../servicios/respuesta-servicio.service';
import { EstudianteServicioService } from 'src/app/servicios/estudiante-servicio.service';

@Component({
  selector: 'app-responder-actividad',
  templateUrl: './responder-actividad.component.html',
  styleUrls: ['./responder-actividad.component.css']
})
export class ResponderActividadComponent implements OnInit {

  actividad: Actividad;
  estudiante: Estudiante;
  respuesta: Respuesta;
  idCurso: number;
  mensaje: string;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private actividadServicio: ActividadServicioService, private estudianteServicio: EstudianteServicioService, private respuestaServicio: RespuestaServicioService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.idCurso = params.id;
      this.actividadServicio.findActividad(params.idActividad).subscribe(result => {
        console.log(result);
        this.actividad = result;
        this.obtenerEstudiante(params.idEstudiante);
      });
    });
  }

  public obtenerEstudiante(id: number) {
    this.estudianteServicio.findEstudiante(id).subscribe( result => {
      console.log(result);
      this.estudiante = result;
    });
  }
  enviarRespuesta() {
    this.respuesta = new Respuesta(-1, this.mensaje);
    this.estudiante.respuestas.push(this.respuesta);
    this.actividad.respuestas.push(this.respuesta);
    this.respuestaServicio.createRespuesta(this.respuesta).subscribe(result => {
      this.actividadServicio.update(this.actividad).subscribe(result2 => {
        this.estudianteServicio.update(this.estudiante).subscribe(result3 => {
          console.log('Por fin');
          // tslint:disable-next-line: max-line-length
          this.router.navigate([`/estudiante/listar-misactividades`], { queryParams: { id: this.idCurso, idEstudiante: this.estudiante.id } });
        });
      });
    });

  }
}
