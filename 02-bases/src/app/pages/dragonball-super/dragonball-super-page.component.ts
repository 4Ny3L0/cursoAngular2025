import { Component, computed, inject, Inject, signal } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
  selector: 'dragonball-super',
})
export class DragonBallSuperPageComponent {
  public dragonballservice: DragonBallService = inject(DragonBallService);
  public addCharacter(character: Character) {
    this.dragonballservice.addCharacter(character);
  }

  public get characters(): Character[] {
    return this.dragonballservice.characters();
  }
}
