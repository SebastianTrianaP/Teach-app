import { Component, OnInit } from '@angular/core';
import { AdministradorServicioService } from 'src/app/servicios/administrador-servicio.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: AdministradorServicioService) { }

  ngOnInit() {
    this.usuarioService.findAllUser().subscribe(
      result => {this.usuarios = result; }
    );
  }

}
