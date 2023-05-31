// models/Estudiante.ts
export class Estudiante {
  cedula: string;
  nombre: string;
  apellido: string;
  asignatura: string;
  nota1: number;
  nota2: number;
  promedio: number;
  estado: string;

  constructor() {
    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.asignatura = '';
    this.nota1 = 0;
    this.nota2 = 0;
    this.promedio = 0;
    this.estado = '';
  }

  calcularPromedio(): number {
    return (parseInt(this.nota1.toString()) + parseInt(this.nota2.toString())) / 2;
  }

  verificarEstado(): string{
    let vestado: string;
    if(this.calcularPromedio()  > 6.99 ){
      vestado = 'Aprobado';
    }else{
      vestado = 'Reprobado';
    }
    console.log(vestado);
    return vestado;

  }
}
