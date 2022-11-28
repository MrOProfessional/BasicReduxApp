import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { multiply, decrement, increment } from './contador/contador.actions';

interface AppState {
  contador: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number = 0;

  constructor(private store: Store<AppState>) {
    store.subscribe((state) => console.log(state));
  }

  multiplicar(): void {
    this.store.dispatch(multiply())
  }

  dividir(): void {
    this.store.dispatch(decrement())
  }

  sumar(): void {
    this.store.dispatch(increment())
  }

}
