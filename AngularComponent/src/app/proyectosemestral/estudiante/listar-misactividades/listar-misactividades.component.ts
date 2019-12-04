import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { Actividad } from '../../../model/actividad';
import { Curso } from 'src/app/model/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';
import { EstudianteServicioService } from 'src/app/servicios/estudiante-servicio.service';
import { UsuarioServicioService } from 'src/app/servicios/usuario-servicio.service';

@Component({
  selector: 'app-listar-misactividades',
  templateUrl: './listar-misactividades.component.html',
  styleUrls: ['./listar-misactividades.component.css']
})
export class ListarMisactividadesComponent implements OnInit {

  idEstudiante: number;
  curso: Curso;
  actividades: Actividad[];

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private cursosServicio: CursoServicioService, private estudianteServicio: EstudianteServicioService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.idEstudiante = params.idEstudiante;
      this.cursosServicio.findCurso(params.id).subscribe(result => {
        console.log(result);
        this.curso = result;
        this.obtenerActividades();
      });
    });
  }

  public obtenerActividades() {
    this.actividades = this.curso.actividades;
    console.log(this.actividades);
  }
}
