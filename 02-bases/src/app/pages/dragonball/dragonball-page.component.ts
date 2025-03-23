import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';
import { CommonModule, NgClass, NgFor } from '@angular/common';

@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [NgClass],
})
export class DragonBallPageComponent {
  name = signal<string>('');
  power = signal<number>(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  public updatePower(powerValue: number) {
    this.power.set(powerValue);
  }

  public addCharacter(): void {
    if (!this.characterInfoIsValid()) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    console.log(newCharacter);

    this.characters.update((currentCharacters) => [
      ...currentCharacters,
      newCharacter,
    ]);
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
