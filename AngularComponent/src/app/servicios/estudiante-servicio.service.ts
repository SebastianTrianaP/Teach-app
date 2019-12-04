import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServicioService {
  private estudiantesUrl: string;
  constructor(private http: HttpClient) {
    this.estudiantesUrl = 'http://localhost:8080/estudiantes';
  }

  public findAllEstudiantes() {
    const url = this.estudiantesUrl;
    return this.http.get<Estudiante[]>(url, {
      withCredentials: true
    });
  }
  public findEstudiante(id: number): Observable<Estudiante> {
    const url = this.estudiantesUrl + `/${id}`;
    return this.http.get<Estudiante>(url, {
      withCredentials: true
    });
  }
  public update(usuario: Estudiante) {
    const url = this.estudiantesUrl + `/edit/${usuario.id}`;
    return this.http.put(url, {
      id: usuario.id,
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      contra: usuario.contra,
      rol: usuario.rol,
      respuestas: usuario.respuestas
    }, {
      withCredentials: true
    });
  }
}
