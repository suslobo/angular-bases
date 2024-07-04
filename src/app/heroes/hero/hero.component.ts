import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero', //añadimos heroes porque hero está dentro de heroes
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  //creamos propiedades
  public name: string = 'ironman';
  public age: number = 45;

  //creamos un get: es una propiedad, pero se ve como un método
  get capitalizedName():string {
    return this.name.toUpperCase(); //para que nos devuelva el nombre de nuestro héroe en mayúsculas
  }

  //creamos un método
  getHeroDescription():string {
    //concatenamos
    return `${ this.name } - ${ this.age }`;

  }
  //nuevos métodos para poder cambiar en los botones la edad y el nombre del héroe
  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25;

  }

  resetForm():void {
    this.name = 'iroman';
    this.age = 45;
  }


}
