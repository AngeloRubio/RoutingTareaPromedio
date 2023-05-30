import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
  // Variables y métodos necesarios para agregar alumnos y aplicar filtros

  constructor(private router: Router) {}

  navegarAVista2(): void {
    this.router.navigate(['/vista2']);
  }
}
