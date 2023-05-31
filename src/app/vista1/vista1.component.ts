import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../models/Estudiante';
import { EstudianteService } from '../estudiante.service';


@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
  estudiantes: Estudiante[] = [];
  estudiante: Estudiante = new Estudiante();
  filtro: string = 'todos';
  constructor(private ServeEstudiante: EstudianteService) {
    this.estudiantes = ServeEstudiante.getDatos();
   }
  
  agregarEstudiante(estudiante: Estudiante) {
    estudiante.promedio = estudiante.calcularPromedio();
    estudiante.estado = estudiante.verificarEstado();
    this.ServeEstudiante.agregarEstudiante(estudiante);
    //this.estudiantes = this.ServeEstudiante.getDatos();
    this.estudiantes.push(estudiante);
    this.estudiante = new Estudiante();
  }
}