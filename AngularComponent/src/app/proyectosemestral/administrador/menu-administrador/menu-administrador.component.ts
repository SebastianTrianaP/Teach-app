import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorServicioService } from 'src/app/servicios/administrador-servicio.service';
import { Administrador } from '../../../model/administrador';
import { UsuarioServicioService } from '../../../servicios/usuario-servicio.service';


@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {


  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorServicioService, private usuarioService: UsuarioServicioService) { }

  ngOnInit() {
  }

  public logout() {
    this.usuarioService.logout().subscribe(data => {
      this.router.navigate([``]);
    }, error => {
      console.error(error);
    });
  }

}
