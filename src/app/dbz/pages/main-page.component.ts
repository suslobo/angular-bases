
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
//este es nuestro listado
export class MainPageComponent {
  //hemos inyectado nuestro sericio
  constructor( private dbzService: DbzService) {}

  //get para obtener los datos
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  //eliminamos el characer por el id
  onDeletedCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id);
  }

  onNewCharacter( character: Character):void {
    this.dbzService.addCharacter( character );
  }

}
