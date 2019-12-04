import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorServicioService } from 'src/app/servicios/administrador-servicio.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.css']
})
export class UsuarioViewComponent implements OnInit {
  usuario: Usuario;
  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: AdministradorServicioService) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.usuarioService.findUser(params.id).subscribe(result => {
          this.usuario = result;
        });
      });
  }
  public eliminarUsuario() {
    this.usuarioService.delete(this.usuario.id).subscribe(
      result => {
        this.router.navigate([`/administrador/listar-usuarios`]);
      }
    );
  }
}
