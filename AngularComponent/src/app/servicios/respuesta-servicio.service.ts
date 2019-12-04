import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../model/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaServicioService {

  private respuestasUrl: string;
  constructor(private http: HttpClient) {
    this.respuestasUrl = 'http://localhost:8080/respuestas';
   }
   public createRespuesta(respuesta: Respuesta) {
    const url = this.respuestasUrl + `/create`;
    return this.http.post(url, {
      mensaje: respuesta.mensaje,
    }, {
      withCredentials: true
    });
  }

}
