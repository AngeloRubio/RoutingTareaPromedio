import { Component } from '@angular/core';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css'],
})
export class Vista2Component {
  // Variables y métodos necesarios para mostrar el promedio general

  regresarAVista1(): void {
    history.back();
  }
}
