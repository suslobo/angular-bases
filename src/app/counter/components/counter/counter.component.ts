import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
//debemos importarlo en el app.modules, en declarations
export class CounterComponent {
  public counter: number = 10;

  //creamos un nuevo método. se va a llamar increaseBy (incrementar valor)
  increaseBy( value: number ):void {
    //queremos incrementar uno a nuestro botón
    this.counter +=value;
  }

  //creamos nuevo método para resetear y volver al valor 10
  resetCounter() {
    this.counter = 10;
  }

}
