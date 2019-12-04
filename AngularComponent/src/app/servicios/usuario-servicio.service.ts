import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/usuarios';
  }
  public findUserByEmail(email: string): Observable<Usuario> {
    const url = this.usersUrl + `/email/${email}`;
    return this.http.get<Usuario>(url, {
      withCredentials: true
    });
  }
  public findUser(id: number): Observable<Usuario> {
    const url = this.usersUrl + `/${id}`;
    return this.http.get<Usuario>(url, {
      withCredentials: true
    });
  }
  public login(email: string, password: string) {
    const formHeaders = new HttpHeaders();
    formHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const formParams = new HttpParams()
      .set('username', email)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: formHeaders,
      params: formParams,
      withCredentials: true
    });
  }

  public logout() {
    return this.http.post('http://localhost:8080/logout', null, {
      withCredentials: true
    });
  }
}
