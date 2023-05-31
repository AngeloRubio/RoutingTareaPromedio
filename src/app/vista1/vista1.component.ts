import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../models/Estudiante';
import { EstudianteService } from '../estudiante.service';


@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css'],
  providers: [EstudianteService]
})
export class Vista1Component {
  estudiantes: Estudiante[] = [];
  estudiante: Estudiante = new Estudiante();
  filtro: string = 'todos';

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
    this.estudiante = new Estudiante(); // Reinicia el objeto estudiante después de agregarlo
  }
}