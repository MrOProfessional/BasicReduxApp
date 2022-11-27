import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number;

  constructor() {
    this.contador = 10;
  }
  multiplicar(): void {
    this.contador *= 2;
  }

  dividir(): void {
    this.contador /= 2;

  }

  sumar(): void {
    this.contador += 2;
  }

}
