import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';

@Component({
  selector: 'app-curso-view',
  templateUrl: './curso-view.component.html',
  styleUrls: ['./curso-view.component.css']
})
export class CursoViewComponent implements OnInit {

  curso: Curso;
  constructor(private route: ActivatedRoute, private router: Router, private cursoService: CursoServicioService) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.cursoService.findCurso(params.id).subscribe(result => {
          this.curso = result;
        });
      });
  }
  public eliminarCurso() {
    this.cursoService.delete(this.curso.id).subscribe(
      result => {
        this.router.navigate([`/administrador/listar-cursos`]);
      }
    );
  }

}
