import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/Character.interface';

@Component({
  selector: 'dbs-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css',
})
export class CharacterAddComponent {
  public name = signal<string>('');
  public power = signal<number>(0);
  public newCharacter = output<Character>();
 
  addCharacter(): void {
    if (!this.characterInfoIsValid()) {
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    this.newCharacter.emit(newCharacter);
    this.resetInputs();
  }

  public characterInfoIsValid(): boolean {
    if (this.name().length === 0 || this.power() < 0) return false;
    return true;
  }

  public resetInputs() {
    this.name.set('');
    this.power.set(0);
  }
}
