import { Component, OnInit } from '@angular/core';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';
import { Curso } from 'src/app/model/curso';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {


  cursos: Curso[];

  constructor(private cursoService: CursoServicioService) { }

  ngOnInit() {
    this.cursoService.findAllCursos().subscribe(
      result => {this.cursos = result; }
    );
  }

}
