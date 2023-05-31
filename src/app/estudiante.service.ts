import { Injectable } from '@angular/core';
import { Estudiante } from './models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  estudiantes: Estudiante[] = [];

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
  }
}
