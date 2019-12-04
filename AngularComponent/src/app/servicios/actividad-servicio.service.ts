import { Injectable } from '@angular/core';
import { Actividad } from '../model/actividad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadServicioService {
  private actividadUrl: string;
  constructor(private http: HttpClient) {
    this.actividadUrl = 'http://localhost:8080/actividades';
  }

  public createActividad(actividad: Actividad) {
    const url = this.actividadUrl + `/create`;
    return this.http.post<Actividad>(url, {
      titulo: actividad.titulo,
      descripcion: actividad.descripcion,
      fechaEntrega: actividad.fechaEntrega
    }, {
      withCredentials: true
    });
  }
  public findActividad(id: number): Observable<Actividad> {
    const url = this.actividadUrl + `/${id}`;
    return this.http.get<Actividad>(url, {
      withCredentials: true
    });
  }
  public delete(id: number) {
    const url = this.actividadUrl + `/delete/${id}`;
    return this.http.delete<Actividad>(url, {
      withCredentials: true
    });
  }
  public update(actividad: Actividad) {
    const url = this.actividadUrl + `/edit/${actividad.id}`;
    return this.http.put(url, {
      titulo: actividad.titulo,
      descripcion: actividad.descripcion,
      fechaEntrega: actividad.fechaEntrega
    }, {
      withCredentials: true
    });
  }
}
