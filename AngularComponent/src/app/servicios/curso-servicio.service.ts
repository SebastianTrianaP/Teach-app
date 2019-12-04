import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../model/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoServicioService {
  private cursosUrl: string;
  constructor(private http: HttpClient) {
    this.cursosUrl = 'http://localhost:8080/cursos';
  }

  public findAllCursos() {
    const url = this.cursosUrl;
    return this.http.get<Curso[]>(url, {
      withCredentials: true
    });
  }
  public findCurso(id: number): Observable<Curso> {
    const url = this.cursosUrl + `/${id}`;
    return this.http.get<Curso>(url, {
      withCredentials: true
    });
  }
  public findCursoByProfesor(id: number) {
    const url = this.cursosUrl + `/profesores/${id}`;
    return this.http.get<Curso[]>(url, {
      withCredentials: true
    });
  }

  public findCursoByEstudiante(id: number) {
    const url = this.cursosUrl + `/estudiantes/${id}`;
    return this.http.get<Curso[]>(url, {
      withCredentials: true
    });
  }

  public createCurso(curso: Curso) {
    const url = this.cursosUrl + `/create`;
    return this.http.post(url, {
      nombre: curso.nombre,
      profesores: curso.profesores,
      estudiantes: curso.estudiantes
    }, {
      withCredentials: true
    });
  }

  public update(curso: Curso) {
    curso.profesores.forEach(profesor => {
        profesor.authorities = null;
      });
    curso.estudiantes.forEach(estudiante => {
          estudiante.authorities = null;
        });
    console.log(curso);
    const url = this.cursosUrl + `/edit/${curso.id}`;
    return this.http.put(url, {
      ID: curso.id,
      nombre: curso.nombre,
      profesores: curso.profesores,
      estudiantes: curso.estudiantes,
      actividades: curso.actividades
    }, {
      withCredentials: true
    });
  }

  public delete(id: number) {
    const url = this.cursosUrl + `/delete/${id}`;
    return this.http.delete<Curso>(url, {
      withCredentials: true
    });
  }
}
