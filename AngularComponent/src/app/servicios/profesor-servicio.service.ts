import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../model/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorServicioService {
  private profesoresUrl: string;
  constructor(private http: HttpClient) {
    this.profesoresUrl = 'http://localhost:8080/profesores';
   }

   public findAllProfesores() {
    const url = this.profesoresUrl;
    return this.http.get<Profesor[]>(url, {
      withCredentials: true
    });
  }
  public findProfesor(id: number): Observable<Profesor> {
    const url = this.profesoresUrl + `/${id}`;
    return this.http.get<Profesor>(url, {
      withCredentials: true
    });
  }
  public update(usuario: Profesor) {
    const url = this.profesoresUrl + `/edit/${usuario.id}`;
    return this.http.put(url, {
      id: usuario.id,
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      contra: usuario.contra,
      rol: usuario.rol,
    }, {
      withCredentials: true
    });
  }
}
