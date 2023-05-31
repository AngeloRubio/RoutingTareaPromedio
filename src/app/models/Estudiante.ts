export class Estudiante {
    nombre: string;
    apellido: string;
    estado: boolean;
    edad: string;

    constructor(nombre: string, apellido: string, estado: boolean, edad: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estado = estado;
        this.edad = edad;
    }
}