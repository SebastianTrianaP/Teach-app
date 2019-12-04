import { Usuario } from './usuario';
import { Curso } from './curso';
import { Respuesta } from './respuesta';

export class Estudiante extends Usuario {
  authorities: any;
  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    contra: string,
    rol: string,
    public respuestas: Respuesta[]
  ) {
    super(id, nombre, apellidos, email, contra, rol);
  }
}
