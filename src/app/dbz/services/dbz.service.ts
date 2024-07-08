import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  //character es una propiedad pública
   public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character):void {

    //cuando creamos un nuevo character
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

 /*  onDeleteCharacter( index:number) {
    this.characters.splice(index,1); */
    deleteCharacterById( id:string) {

      this.characters = this.characters.filter( character => character.id !== id);
  }

}
