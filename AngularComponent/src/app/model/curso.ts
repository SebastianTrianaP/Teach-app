import { Profesor } from './profesor';
import { Actividad } from './actividad';
import { Estudiante } from './estudiante';

export class Curso {

  constructor(
    public id: number,
    public nombre: string,
    public profesores: Profesor[],
    public estudiantes: Estudiante[],
    public actividades: Actividad[]
  ) {}
}
