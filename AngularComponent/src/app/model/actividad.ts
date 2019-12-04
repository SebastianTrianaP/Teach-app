import { Curso } from './curso';
import { Respuesta } from './respuesta';

export class Actividad {
  constructor(
    public id: number,
    public respuestas: Respuesta[],
    public fechaEntrega: string,
    public descripcion: string,
    public titulo: string
  ) {}
}

