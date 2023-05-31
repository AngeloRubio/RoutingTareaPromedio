import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from '../models/Estudiante';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
    transform(estudiantes: Estudiante[], filtro: string): Estudiante[] {
      if (filtro === 'todos') {
        return estudiantes;
      } else if (filtro === 'aprobados') {
        return estudiantes.filter(estudiante => estudiante.promedio > 7);
      } else if (filtro === 'reprobados') {
        return estudiantes.filter(estudiante => estudiante.promedio < 7);
      } else {
        return estudiantes;
      }
    }
  }
