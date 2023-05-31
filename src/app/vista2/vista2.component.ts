import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/Estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css'],
})
export class Vista2Component implements OnInit {
  estudiantes: Estudiante[] = [];
  promedioGeneral: number = 0;


  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.estudiantes = this.estudianteService.getDatos();
    
    const sumaPromedios = this.estudiantes.reduce((suma, estudiante) => suma + estudiante.promedio, 0);
    this.promedioGeneral = sumaPromedios / this.estudiantes.length;
  }
}