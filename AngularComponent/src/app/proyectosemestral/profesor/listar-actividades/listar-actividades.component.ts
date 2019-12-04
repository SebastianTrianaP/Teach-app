import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { Actividad } from '../../../model/actividad';
import { ActivatedRoute } from '@angular/router';
import { CursoServicioService } from 'src/app/servicios/curso-servicio.service';

@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent implements OnInit {

  curso: Curso;
  idProfe: number;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private cursosServicio: CursoServicioService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.idProfe = params.idProfe;
        this.cursosServicio.findCurso(params.id).subscribe(result => {
          console.log(result);
          this.curso = result;
        });
      });
  }


}
