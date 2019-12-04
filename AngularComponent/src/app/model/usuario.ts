export class Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public email: string,
    public contra: string,
    public rol: string,
  ) {}
}
