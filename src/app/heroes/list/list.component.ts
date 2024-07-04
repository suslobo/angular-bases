import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //creamos una propiedad heroNames con sus valores dentro del array

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  //creamos un método para borrar el útlimo héroe
  removeLastHero():void {
    //creamos variable
    this.deletedHero = this.heroNames.pop();
  }

}
