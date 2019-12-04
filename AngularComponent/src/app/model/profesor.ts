import { Usuario } from './usuario';
import { Curso } from './curso';
export class Profesor extends Usuario {
  authorities: any;
  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    contra: string,
    rol: string,
  ) {
    super(id, nombre, apellidos, email, contra, rol);
  }
}
