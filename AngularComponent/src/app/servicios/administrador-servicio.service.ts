import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { throwError, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Administrador } from '../model/administrador';
import { Profesor } from '../model/profesor';
import { Estudiante } from '../model/estudiante';

@Injectable({
  providedIn: 'root'
})
export class AdministradorServicioService {
  private usersUrl: string;
  private adminUrl: string;
  private profeUrl: string;
  private estudianteUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/usuarios';
    this.adminUrl = 'http://localhost:8080/administradores';
    this.profeUrl = 'http://localhost:8080/profesores';
    this.estudianteUrl = 'http://localhost:8080/estudiantes';
  }

  public findUser(id: number): Observable<Usuario> {
    const url = this.usersUrl + `/${id}`;
    return this.http.get<Usuario>(url, {
      withCredentials: true
    });
  }
  public findAdmin(id: number): Observable<Administrador> {
    const url = this.adminUrl + `/${id}`;
    return this.http.get<Administrador>(url, {
      withCredentials: true
    });
  }
  public findUserByEmail(email: string): Observable<Usuario> {
    const url = this.usersUrl + `/email/${email}`;
    return this.http.get<Usuario>(url, {
      withCredentials: true
    });
  }
  public findAllUser() {
    const url = this.usersUrl;
    return this.http.get<Usuario[]>(url, {
      withCredentials: true
    });
  }
  public createUser(usuario: Usuario) {
    const url = this.usersUrl + `/create`;
    return this.http.post(url, {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      contra: usuario.contra,
      rol: usuario.rol
    }, {
      withCredentials: true
    });
  }
  public createAdmin(usuario: Administrador) {
    const url = this.adminUrl + `/create`;
    return this.http.post(url, {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      contra: usuario.contra,
      rol: usuario.rol
    }, {
      withCredentials: true
    });
  }
  public createEstudiante(usuario: Estudiante) {
    const url = this.estudianteUrl + `/create`;
    return this.http.post(url, {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      contra: usuario.contra,
      rol: usuario.rol
    }, {
      withCredentials: true
    });
  }
  public createProfe(usuario: Profesor) {
    const url = this.profeUrl + `/create`;
    return this.http.post(url, {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      contra: usuario.contra,
      rol: usuario.rol
    }, {
      withCredentials: true
    });
  }
  public update(usuario: Usuario) {
    const url = this.usersUrl + `/update/${usuario.id}`;
    return this.http.put(url, {
      id: usuario.id,
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      contra: usuario.contra,
      rol: usuario.rol
    }, {
      withCredentials: true
    });
  }
  public delete(id: number) {
    const url = this.usersUrl + `/delete/${id}`;
    return this.http.delete<Usuario>(url, {
      withCredentials: true
    });
  }
}
